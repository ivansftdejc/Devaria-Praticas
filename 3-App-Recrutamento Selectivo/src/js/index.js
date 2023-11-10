const $step_1=$('.step.one');
const $step_2=$('.step.two');
const $step_3=$('.step.three');

const $step_text=$('#step-text');
const $step_description=$('#step-description');

const $input_nome=$('#nome');
const $input_sobrenome=$('#sobrenome');
const $dataNascimento=$('#dataNascimento');
 
function init(){
    $step_2.hide();
    $step_3.hide();

    $step_text.text('Passo 1 de 3 - Dados Pessoais');
    $step_description.text('Descreva seus dados para que possamos te conhecer melhor');

    $input_nome.keyup(function(){
        const closest=$(this).closest('.input-data');
        if(!this.value ||this.value.trim().length<2){
            return closest.addClass('error');
        }
        return closest.removeClass('error');
    });
    $input_sobrenome.keyup(function(){
        const closest=$(this).closest('.input-data');
        if(!this.value ||this.value.trim().length<2){
            return closest.addClass('error');
        }
        return closest.removeClass('error');
    });
    $dataNascimento.on('focus',function() {
        this.type='date';        
    });
    $dataNascimento.on('blur',function() {
        this.type='text';        
    });
}
init();