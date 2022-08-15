const {Article} = require("./models")

Article.findAll(
    {
        where: {is_approved: true}
    }
).then(articles => {
    for (let i = 0; i < articles.length; i++) {
        let data = articles[i].get()
        console.log(data)
    }
}).catch(err => {
    console.log(err)
})