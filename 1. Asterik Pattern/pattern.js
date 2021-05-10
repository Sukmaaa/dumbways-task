function patternData() {
    const pattern = document.getElementById("pattern").value; //panggil value sesuai yang di inputkan

    let triangle = " "; //buat string kosong terlebih dahulu
    for (let i = 1; i <= pattern; i++) { //lalukan perulangan sesuai dengan yang di inputkan
        for (let j = 1; j <= i; j++) { //lakukan perulangan lagi di setiap yang di lalukan perulangan var i
            triangle += "* "; //kemudian hasilkan loop string kosong tadi dengan di isi sesuai perulangan yang di lakukan
        }
        triangle += "<br>"; //buat lah sebuah baris baru untuk di setiap perulangan var i
    }
    document.getElementById("output").innerHTML = triangle; //kemudian tampilkan hasilnya di layar
    return false;
}