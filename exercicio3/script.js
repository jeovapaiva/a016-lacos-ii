
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// for ( let i = 0; i < maioresPaises.length; i++) {
//     let paises = `País ${i + 1}: `
//     for (let j = 0; j < maioresPaises[i].length; j++) {
//         paises += `${maioresPaises[i][j]}`
//     }
//     console.log(paises); 
// }

//if (maioresPaises.length === 1)  
for ( let i = 0; i < maioresPaises.length; i++) {
    let paises = `País ${i + 1}: `
    for (let j of maioresPaises[i]) {
        paises += `${j}`
    }
    console.log(paises);
}
//}  //else {
    //console.log("código errado!");
//} 