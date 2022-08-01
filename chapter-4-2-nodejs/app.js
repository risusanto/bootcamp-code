const users = require('./repository/user')
const formatter = require('format-number')
const _ = require('lodash')

console.log('======================================')
console.log("Total User: ", users.length)
let total = 0;
for (let i = 0; i < users.length; i++) {
    total = total + users[i].total
}

// format number
formattedNumber = formatter({prefix: 'Rp.', suffix: ''})

console.log("Total Belanja: ", formattedNumber(total))

sortedUser = _.orderBy(users, ['total', 'kunjungan'], ['desc', 'desc'])
activeUser = _.filter(users, user => user.kunjungan > 5)

console.log("Ranking Pelanggan terbaik: ")
for (let i = 0; i < sortedUser.length; i++) {
    console.log(`Ke-${i + 1} -> ${sortedUser[i].name}`)
}

console.log("Active Users: ")
for (let i = 0; i < activeUser.length; i++) {
    console.log(`${i + 1}. ${activeUser[i].name}`)
}

console.log('======================================')