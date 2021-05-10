function fibonacci() {
    const number = document.getElementById("number").value;

    let start = 0, fib = 1, nextFib;

    for (let i = 1; i <= number; i++) {
        document.getElementById("output").innerHTML += start + ", "; // 0 di cetak lebih dulu
        nextFib = start + fib;
        start = fib; //lalu setiap nilai fib disimpan di variable start
        fib = nextFib; //dan jumlah 2 nilai sebelumnya di simpan di varible fib
    }


    return false;
}