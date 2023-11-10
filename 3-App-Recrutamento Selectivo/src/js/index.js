const $step_1=$('.step.one');
const $step_2=$('.step.two');
const $step_3=$('.step.three');

const $step_text=$('#step-text');
const $step_description=$('#step-description');

const $containerBtnFormOne=$('#containerBtnFormOne');
const $btnFormOne=$('#btnFormOne');

const $input_nome=$('#nome');
const $input_sobrenome=$('#sobrenome');
const $input_dataNascimento=$('#dataNascimento');
const $input_email=$('#email');
const $input_minibio=$('#minibio');

let nome_Valido=false;
let sobrenome_Valido=false;
let dataNascimento_Valido=false;
let e_mail_Valido=false;
let minibio_Valido=false;

function Validar_Form_1(){
    if(nome_Valido&&sobrenome_Valido
        &&dataNascimento_Valido&&
        e_mail_Valido){
            $containerBtnFormOne.removeClass('disabled');
            $btnFormOne.removeClass('disabled');
        }else{
            $containerBtnFormOne.addClass('disabled');
            $btnFormOne.addClass('disabled');
        }
}
function init(){
    $step_2.hide();
    $step_3.hide();

    $step_text.text('Passo 1 de 3 - Dados Pessoais');
    $step_description.text('Descreva seus dados para que possamos te conhecer melhor');

    const minLengthText=2;
    const e_mail_Regex=   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function Validar_input(elemento, minLength, maxLength, regex){
            const closest=$(elemento).closest('.input-data');
            if(!elemento.value 
                || (minLength && elemento.value.trim().length<minLength)
                || (maxLength && elemento.value.trim().length>minLength)
                || (regex && !elemento.value.toLowerCase().match(regex))
                ){
                closest.addClass('error');
                return false;
            }
            closest.removeClass('error');
            return true;
          

    }
    $input_nome.keyup(function(){
       nome_Valido= Validar_input(this, minLengthText);
       Validar_Form_1();
    });
    $input_sobrenome.keyup(function(){
       sobrenome_Valido= Validar_input(this, minLengthText);
       Validar_Form_1();
    });
    $input_dataNascimento.on('focus',function() {
        this.type='date';        
    });
    $input_dataNascimento.on('blur',function() {
        if(!this.value){
            this.type='text';
        }     
    });
    $input_dataNascimento.keyup(function(){
       dataNascimento_Valido= Validar_input(this, minLengthText);
       Validar_Form_1();
    });
    $input_dataNascimento.keyup(function(){
        dataNascimento_Valido=Validar_input(this,minLengthText);
        Validar_Form_1();

    });
    $input_email.keyup(function(){
        e_mail_Valido=Validar_input(this,null,null,e_mail_Regex);
        Validar_Form_1();
    });
    $input_minibio.keyup(function(){
       Validar_Form_1();
    });
   
}
init();