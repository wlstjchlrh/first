function hello() {
    console.log("Hello World!");
}
function printMultiplicationTable(n) {
    for (var i = 1; i <= 9; i++) {
    console.log(n + " x " + i + " = " + (n*i));
    }
}

printMultiplicationTable(3);