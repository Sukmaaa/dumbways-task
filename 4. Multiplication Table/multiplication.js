function multiplication() {
    const number = document.getElementById("number").value;

    for (let i = 1; i <= 10; i++) {

        count = i * number;

        document.getElementById("output").innerHTML += number + " * " + i + " = " + count + "<br>";
    }

    return false;
}