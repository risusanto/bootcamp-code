// object
// nama_property:isi_properti
let myCar = {
    "warna": "merah",
    "merk": "toyota",
    "berjalan": () => {
        console.log("berjalan")
    },
    "isi_bensin": (jumlah) => {
        console.log(`Isi bensin ${jumlah} liter`)
    }
}
// console.log(myCar.merk)
// myCar.merk = "daihatsu"
// console.log(myCar.merk)

myCar.berjalan()
myCar.isi_bensin(7)