const {Article} = require("./models")

Article.destroy({
    where: {is_approved: false}
}).then(() => {
    console.log("article not approved has been deleted")
})