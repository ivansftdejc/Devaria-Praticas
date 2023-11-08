//Manipulção por Id com jQuery: getElementById
const Elemento_Id= $('#Manipulação_Id'); 
console.log(Elemento_Id);
//Manipulação por Classe com jQuery: getElementByClassName
const Elemento_Class=$('.mt-2');
console.log(Elemento_Class)

//Manipulação por Tag com jQuery: getElementByTagName
let Elementos_Tag= $("h2");
let Elemento_Tag=Elementos_Tag[1];
console.log(Elemento_Tag);

//Criação da função Alteração do HTML com jQuery
const Título= $('#título');
const Texto_Html=$('#Texto');
const Texto_input=$('#input_dinámico');
const Elemento_Margin_2=$('.mt-2');
function alterarHtml(){
    Título.text(Texto_input.val());
    Título.css('fontFamily','Segoe');
    Título.css('fontSize','34px');
    //Implementação da margem superior 4px
    for(let elemento_margin of Elemento_Margin_2){
        $(elemento_margin).addClass('mt-5 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3');
    }
  

    //Adicionando textos com DOM e jQuery
    const novo_Parágrafo= document.createElement('p');
    $(novo_Parágrafo).text(Texto_input.val());
    Texto_Html.after(novo_Parágrafo);

    Texto_input.val('');
}

