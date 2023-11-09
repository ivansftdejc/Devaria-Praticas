
const Div_Gatos=$('#gatos');
function obterGato(){
    fetch('https://cataas.com/cat')
    .then(resultado=>resultado.blob())
    .then(blob=>{
        const Url_objecto_Image=URL.createObjectURL(blob);
        const imagem=document.createElement('img');
        imagem.src=Url_objecto_Image;
        Div_Gatos.append(imagem);
    
    })

    .catch(Erro => console.log('Erro ao executar API',Erro));
}