function primeRange() {
    const prime1 = document.getElementById("prime1").value;
    const prime2 = document.getElementById("prime2").value;

    // looping dari terkecil/bilangan 1, ke terbesar/bilangan 2
    for (let i = prime1; i <= prime2; i++) {

        let num = 0;
        // looping dimulai dari 2
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                num = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && num == 0) {
            document.getElementById("output").innerHTML += i + ",";
        }
    }

    return false;
}