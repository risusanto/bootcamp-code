const {Article} = require("./models")

Article.findOne({
    where: {id: 3}
}).then(article => {
    console.log(article.get())
})