// Contoh Program if, else, nested if : Penentuan Kategori Usia

let usia = 25;

if (usia < 18) {
    console.log("Anda adalah seorang remaja"); //Kondisi pertama ini menjelaskan bila umur kurang dari 18 maka masih remaja.
} else {
    if (usia >= 18 && usia < 60) { //Setelah dicek pada kondisi pertama bila salah maka akan masuk kondisi kedua
        console.log("Anda adalah seorang sepuh");
    } else {
        console.log("Anda adalah seorang legenda :D");
    }
}

// Contoh Program Swtich Case : Menentukan Hari

let hari = 3;
let namahari;

switch (hari) {
    case 1:
        namahari = "Minggu";
        break;
    case 2:
        namahari = "Senin Terus";
        break;
    case 3:
        namahari = "Selasa";
        break;
    case 4:
        namahari = "Rabu";
        break;
    case 5:
        namahari = "Kamis";
        break;
    case 6:
        namahari = "Jumat jangan lupa sholjum";
        break;
    case 7:
        namahari = "Sabtu";
        break;
    default:
        namahari = "Semoga harimu senin terus :D";
}

console.log("Hari ini adalah hari " + namahari);

// Contoh Program For Statement : Menampilkan Bilangan Ganjil dari 1 hingga 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("for " + i);
    }
}

// Contoh Program While dan Do While :

let j = 2;

while (j <= 10) {
    console.log("While " + j);
    j += 2;
}

let password;

do {
    password = prompt("Masukkan password (minimal 6 karakter):");
} while (password.length < 6);

console.log("Password diterima!"); //Program ini berjalan di browser

// Contoh Program Function: Menghitung Luas Persegi Panjang

function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

let panjang = 5;
let lebar = 3;
let luas = hitungLuasPersegiPanjang(panjang, lebar);

console.log("Luas persegi panjang dengan panjang", panjang, "dan lebar", lebar, "adalah", luas);

