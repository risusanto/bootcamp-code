const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User} = require('../models')
const e = require("express");

async function get_user_by_email(email) {
    let user = null
    try{
        user = await User.findOne({
            where: {
                email:email
            }
        })
    } catch (e) {
        console.log(e)
    }

    return user
}

function generate_access_token(data) {
    let user_data = {
        id: data.id,
        name: data.name,
        email: data.email
    }
    let access_token = jwt.sign(user_data,process.env.JWT_SECRET)

    return {
        user: user_data,
        access_token: access_token
    }
}

async function register(req, res) {
    let email = req.body['email']

    let name = req.body['name']
    let password = req.body['password']

    let res_data = {
        status: 'failed',
        message: 'failed',
        data: null
    }

    // get user by email
    let user = await get_user_by_email(email)
    if(user != null) {
        res_data.message = 'email not available'
        return res.status(400).json(res_data)
    }
    let password_encrypted = bcrypt.hashSync(password, 10)

    User.create({
        email: email,
        password: password_encrypted,
        name: name
    }).then(user => {
        res_data.status = 'ok'
        res_data.message = 'success'
        res_data.data = generate_access_token(user)

        res.json(res_data)
    }).catch(err => {
        return res.status(500).json({
            ...res_data,
            message: err.message
        })
    })
}

async function login(req, res) {
    let email = req.body['email']
    let password = req.body['password']

    let res_data = {
        status: 'failed',
        message: 'incorrect email or password',
        data: null
    }

    // get user by email
    let user = await get_user_by_email(email)
    if(user == null) {
        return res.status(400).json(res_data)
    }
    if(!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json(res_data)
    }

    res_data.status = 'ok'
    res_data.message = 'success'
    res_data.data = generate_access_token(user)

    res.json(res_data)
}

async function profile(req, res) {
    res.json({
        status: 'ok',
        message: 'success',
        data: req.user
    })
}

module.exports = {
    register,
    login,
    profile
}