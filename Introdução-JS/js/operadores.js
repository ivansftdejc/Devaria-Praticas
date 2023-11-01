//Operadores Lógicos
    const verdadeiro=true;
    const falso=!true;

    //Operador && (E)
    console.log(`${falso} e ${falso} é =`, falso&&falso);
    console.log(`${verdadeiro} e ${falso} é =`, verdadeiro&&falso);
    console.log(`${verdadeiro} e ${verdadeiro} é =`, verdadeiro&&verdadeiro);
    //Operdor ||(ou)
    console.log(`${falso} ou ${falso} é =`, falso||falso);
    console.log(`${verdadeiro} ou ${falso} é =`, verdadeiro||falso);
    console.log(`${verdadeiro} ou ${verdadeiro} é =`, verdadeiro||verdadeiro);
    //Operadores de Comparação
    const Num1=32;
    const Num2=7;
    const Num3=16;
    const Num4=4;
    const Num5=7;
    const string_num='4';
        //Operador ==, Comparação de Valores
        console.log(`Em comparação de valores ${Num4} é igual que ${string_num} do tipo string`, Num4==string_num);
        //Operador ===, Comparação de Valores e tipos
        console.log(`Em comparação de valores e tipos ${Num4} e o seu tipo são diferentes que ${string_num} do tipo string`,Num4!==string_num);
        //Operador >,<,>= e <=
        console.log(`${Num1} é maior que ${Num2}`, Num1>Num2);
        console.log(`${Num4} é menor que ${Num5}`, Num4<Num5);
        console.log(`${Num2} é maior ou igual que ${Num5}`, Num2>=Num5);
        console.log(`${Num2} é menor ou igual que ${string_num} do tipo string`, Num4>string_num);
        console.log(`${Num3} é maior ou igual que ${Num2}`, Num3>=Num2);
    //Operadores Matemáticos
    console.log(`${Num1} + ${Num2}= `,Num1+Num2);
    console.log(`${Num3} - ${Num4}= `,Num3-Num4);
    console.log(`${Num1} / ${Num3}= `,Num1/Num3);
    console.log(`${Num2} x ${string_num} do tipo string = `,Num2*string_num);
    console.log(`O módulo de ${Num3} por ${Num4}= `,Num3%Num4);

    








