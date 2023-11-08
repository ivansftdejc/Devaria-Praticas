//Manipulção por Id: getElementById
const Elemento_Id= document.getElementById('Manipulação_Id'); 
console.log(Elemento_Id);
//Manipulação por Classe: getElementByClassName
const Elemento_Class=document.getElementsByClassName('mt-2');
console.log(Elemento_Class)

//Manipulação por Tag: getElementByTagName
let Elementos_Tag= document.getElementsByTagName("h2");
let Elemento_Tag=Elementos_Tag[1];
console.log(Elemento_Tag);

//Criação da função Alteração do HTML
const Título= document.getElementById('título');
const Subtítulo=document.getElementById('subtítulo');
const Texto_input=document.getElementById('input_dinámico');
const Elemento_Margin_2=document.getElementsByClassName('mt-2');
function alterarHtml(){
    Título.textContent=Texto_input.value;
    Título.style.fontFamily="Segoe";
    Título.style.fontSize="50px";
    //Implementação da margem superior 4px
    for(let elemento_margin of Elemento_Margin_2){
        elemento_margin.className='mt-4 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3'
    }
    Texto_input.value='';

}

