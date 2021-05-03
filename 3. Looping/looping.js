function data1() {
    const number1 = document.getElementById("number1").value;
    for (i = 1; i <= number1; i++) {

        document.getElementById("output1").innerHTML = number1;

        return false;
    }
}