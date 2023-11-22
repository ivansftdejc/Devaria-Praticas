//importando o Readline
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);
let leituraDeCampo;
readLine.question('Insira o valor que deseja ler ', input => {
    leituraDeCampo = input;
    console.log(`O valor que você leu é ${leituraDeCampo}`);  
});