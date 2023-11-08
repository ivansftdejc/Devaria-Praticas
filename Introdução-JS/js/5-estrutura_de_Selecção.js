//Estrutura if e else if
const Num1=32;
const Num2=7;
const Num3=16;
const Num4=4;
const Num5=7;
const string_num='4';
    if(Num1>Num2)
    {
        console.log(`O número ${Num1} é maior que ${Num2}`);
    }
    else if (Num1>Num3){
        console.log(`O número ${Num1} também é maior que ${Num3}`);
    }
    else{
        console.log(`O número ${Num1} não é maior que número ${Num2} nem que ${Num3}`);
    }
//Estrutura Switch (Escolha-Caso)
    switch(5){
        case Num1:
            console.log(`O número é e escolhido é ${Num1}`);
            break;
        case Num2:
            console.log(`O número é e escolhido é ${Num2}`);
            break;
        case Num3:
            console.log(`O número é e escolhido é ${Num3}`);
            break;
        case Num4:
            console.log(`O número é e escolhido é ${Num4}`);
            break;
        case Num5:
            console.log(`O número é e escolhido é ${Num}`);
            break;
        default:
            console.log(`O número selecciodado não foi declarado`);
            break; 
    }