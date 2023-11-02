//Criação da Classe Pessoa
class Pessoa{
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }
}
let Pessoa1= new Pessoa();
Pessoa1.nome='João';
Pessoa1.idade=15;
console.log(Pessoa1.nome,Pessoa1.idade);

//Criação da Classe Usuario sua validação
class Usuario{
    constructor(id,senha){
        this.Id=id;
        this.Senha=senha;
    }
    validação()
    {
        return this.Id.includes('@') && this.Id.includes('.com') ?'E-mail Válido':'E-mail Inválido';
    }
}
let Usuario1=new Usuario('ivandro@gmail.com','jhdjd');
console.log(Usuario1.Id,Usuario1.Senha,Usuario1.validação());
