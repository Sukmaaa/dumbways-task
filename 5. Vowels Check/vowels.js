function vowels() {
    const vokals = document.getElementById("vokals").value;

    if (vokals == "A" || vokals == "a") {
        document.getElementById("output").innerHTML = vokals + " adalah huruf vokal";
    } else if (vokals == "I" || vokals == "i") {
        document.getElementById("output").innerHTML = vokals + " adalah huruf vokal";
    } else if (vokals == "U" || vokals == "u") {
        document.getElementById("output").innerHTML = vokals + " adalah huruf vokal";
    } else if (vokals == "E" || vokals == "e") {
        document.getElementById("output").innerHTML = vokals + " adalah huruf vokal";
    } else if (vokals == "O" || vokals == "o") {
        document.getElementById("output").innerHTML = vokals + " adalah huruf vokal";
    } else {
        document.getElementById("output").innerHTML = vokals + " adalah bukan huruf vokal";
    }

    return false;
}