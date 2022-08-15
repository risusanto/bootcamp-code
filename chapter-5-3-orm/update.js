const {Article} = require("./models")


let query = {
    where: {id: 3}
}
Article.update({
    is_approved: true
}, query).then(() => {
    console.log("data updated")
}).catch(err => {
    console.log(err)
})