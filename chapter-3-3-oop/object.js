// tanpa class

// property_name:value
/*
let myCar = {
    "merk": "Toyota",
    "warna": "Merah",
    "berjalan": () => {
        console.log("mobil berjalan")
    }
}
console.log(myCar.merk)
console.log(myCar["merk"])
myCar.berjalan()
* */

class Car {
    constructor(merk, warna) {
        this.merk = merk
        this.warna = warna
    }

    #mengeluarkan_emisi() {
        console.log("emisi karbon dikeluarkan")
    }

    berjalan() {
        console.log(`${this.merk} mobil berjalan`)
        this.#mengeluarkan_emisi()
    }
}
class Truk extends Car {
    constructor(merk, warna, muatan_maksimum) {
        super(merk, warna);
        this.muatan_maksimum = muatan_maksimum
    }

    static my_static() {
        console.log("ini method static")
    }

    berjalan(muatan) {
        console.log(`truk jalan dengan muatan`)
    }
}

let myCar = new Car("Toyota", "Biru")
let myTruk = new Truk("Mitsubishi", "Putih", 500)

