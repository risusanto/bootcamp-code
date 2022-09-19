require('dotenv').config()
const path = require('path')
const fs = require('fs')

const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2

const port =  process.env.APP_PORT
const UPLOAD_DIR = path.join(__dirname, process.env.UPLOAD_DIR)


// init cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

async function cloudinaryUpload(filePath, folder) {
    if(typeof folder != "string") {
        folder = 'images'
    }
    if(folder === "") {
        folder = 'images'
    }
    let result
    try {
        result = await cloudinary.uploader.upload(filePath, {
            use_filename: true,
            folder: folder
        })
    } catch (e) {
        console.error(e)
        return ""
    }

    fs.unlinkSync(filePath)
    return result.url
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UPLOAD_DIR)
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = new Date().getTime()
        callback(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req,file,callback) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            return callback(null,true)
        } else {
            callback(null, false)
            return callback(new Error("unsupported file type!"))
        }
    }
})

const app = express()

async function uploadHandler (req,res) {
    let url = await cloudinaryUpload(req.file.path, req.params.folder)
    let res_data = {
        url: url
    }
    res.json(res_data)
}

// single uploads
app.post('/image/upload/:folder', upload.single('image'),uploadHandler)


// multiple uploads
app.post('/image/uploads', upload.array('image', 10), async (req, res) => {
    let urls = []
    for(let i = 0; i < req.files.length; i++) {
        urls.push(await cloudinaryUpload(req.files[i].path))
    }

    let res_data = {
        urls: urls,
        number_of_images: urls.length
    }
    res.json(res_data)
})

app.get('/uploads/:filename', (req, res) => {
    res.sendFile(path.join(UPLOAD_DIR, req.params.filename))
})

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
})

app.listen(port)


