const argumentos = process.argv.slice(2);
//Estrutura for
console.log('--------------Estrutura for---------------');
for (let index = 0; index<argumentos.length; index++) {
    console.log(`O argumento ${argumentos[index]} Pertence ao Índice ${index} `);
}
