const argumentos = process.argv.slice(2);
//Estrutura for
console.log('--------------Estrutura for---------------');
for (let index = 0; index<argumentos.length; index++) {
    console.log(`O argumento ${argumentos[index]} Pertence ao Índice ${index} `);
}
//Estrutura while
console.log('--------------Estrutura While---------------');
let index = 0;
while (index<argumentos.length) {
    console.log(`O argumento ${argumentos[index]} Pertence ao Índice ${index} `);
    index++;
}