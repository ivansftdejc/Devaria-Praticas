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

//Criação da Classe Usuario e sua validação
class Usuario{
    constructor(id,senha){
        this.Id=id;
        this.Senha=senha;
    }
    validação()
    {
        return this.Id.includes('@') && this.Id.includes('.com') ?'Válido':'Inválido';
    }
}
let Usuario1=new Usuario('ivandro@gmail.com','jhdjd');
console.log(Usuario1.Id,Usuario1.Senha,Usuario1.validação());

//Implementação de uma herança
class Funcionario extends Usuario{
    constructor(id,senha,nivel_acess){
        super(id,senha);
        this.Nivel_acess=nivel_acess;
    }
}
const Funcionario1 = new Funcionario('ivanftdejc@gmail.com','kjdfh','Nivel 1');
console.log(`O Id do funcionário é ${Funcionario1.Id} e é ${Funcionario1.validação()}`);