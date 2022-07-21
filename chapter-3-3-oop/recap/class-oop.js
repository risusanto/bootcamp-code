// object buah

class Buah {
    constructor(nama, warna) {
        this.nama = nama
        this.warna = warna

        this.ciptaan = "tuhan"
    }
    #ini_private_method() {
        console.log("call for private method")
    }
    _ini_protected() {
        console.log("call for protected method")
    }
    matang() {
        this.warna = "kemerahan"
    }
    jatuh_dari_pohon() {
        this.#ini_private_method()
        this.matang()
    }
}

class Apel extends Buah {
    constructor(tinggi_pohon) {
        super("apel", "hijau");
        this.tinggi_pohon = tinggi_pohon
    }
    matang() {
        this.warna = "merah"
    }
}

class Mangga extends Buah {
    constructor(nama, warna) {
        super(nama, warna);
        // this.tinggi_pohon = tinggi_pohon
    }
    jatuh_dari_pohon(is_dipetik) {
        if (is_dipetik !== true) {
            this.matang()
        }
    }
}

let myBuah = new Buah("mangga", "kuning")
myBuah.jatuh_dari_pohon()
console.log(myBuah.warna)

console.log("===========================================")
// object apel
let myApel = new Apel(5)
console.log(myApel.nama)
myApel.jatuh_dari_pohon()
console.log(myApel.warna)

console.log("===========================================")
// object mangga
let myMangga = new Mangga( "mangga", "hijau")
console.log(myMangga.nama)
myMangga.jatuh_dari_pohon(false)
console.log(myMangga.warna)
