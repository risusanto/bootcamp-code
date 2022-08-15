const express = require("express")
const {Article} = require("./models");
const app = express()

app.get("/", (req, res) => {
    Article.findAll(
        {
            where: {is_approved: true}
        }
    ).then(articles => {
        res.json(articles)
    }).catch(err => {
        res.json({
            msg: "error"
        })
    })
})

app.listen(8080, "localhost",() => {
    console.log("running at http://localhost:8080")
})