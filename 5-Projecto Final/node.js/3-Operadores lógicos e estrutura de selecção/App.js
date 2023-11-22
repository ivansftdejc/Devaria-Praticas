const readLine=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Este Programa verifica se você tem idade para Conduzir')
let idade;
readLine.question('Quantos anos você tem?\n',input=>{
    idade=input
    if (idade>=18){
        console.log(`Parabéns!\n Você tem ${idade} anos e pode conduzir`);
    }else{
        console.log('Você não pode Conduzir!');
    }
})