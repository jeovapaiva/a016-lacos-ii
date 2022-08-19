
console.log("Insira um número da tabuada:");
var num = +prompt();
var arrayTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

for (let i in arrayTabuada) {
    console.log (`${i} x ${num} = ${+i * num}`)
}   