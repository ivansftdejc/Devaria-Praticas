//Ex#1. Crie uma variável global e uma local com o mesmo nome. Tente acessá-la dentro e fora de uma função
var _mensagem='Variável Global';
//Acesso Glabal
console.log(`Apresento-vos a ${_mensagem}`);
Mensagem_Variavel_Local();
function Mensagem_Variavel_Local ()
{
    let _mensagem='Variável Local';
    console.log(`Apresento-vos a ${_mensagem}`);
}
