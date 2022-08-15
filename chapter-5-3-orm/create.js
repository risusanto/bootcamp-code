const {Article} = require("./models")

// insert data into database
Article.create({
    title: "My first article",
    body: "draft body",
    is_approved: false
}).then(article => {
    console.log("data created", article)
})