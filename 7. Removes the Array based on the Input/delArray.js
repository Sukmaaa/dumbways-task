function delArray() {
    let addValue = document.getElementById("array1").value;
    let delValue = document.getElementById("array2").value;

    let data = [];
    data = addValue.split("");

    for (let a = 0; a <= data.length - 1; a++) {
        if (data[a] == delValue) {
            delete data[a];
        }
    }
    document.getElementById("output").innerHTML = data;
    return false;
}