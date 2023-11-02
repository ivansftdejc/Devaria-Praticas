//Estrutura For
    //Escreva uma algoritmo que apresente na tela 150 múltiplos de 3
        for (let index_for = 0; index_for < 150; index_for++) {

            console.log(index_for * 3);
        }
    //Estrutura While
    //Escreva um algoritmo que mostre a mensagem 'o indice não é divisível por 23   ' enquanto o indice não for divisivel por 23
        let index_while =1;
        while ((index_while%23)!==0) 
        {   
            console.log(`O ${index_while} não é divisível por 23`);
            ++index_while;
        }
    //Estrutura do While
    //Escreva um algoritmo que determine se o um número é inferior que 10
        let Num =0;
        do {
            console.log(`O ${Num} é inferior que 10`);
            Num++
        }
        while (Num<10)
    //Estrutura For Of
    //Escreva um algoritmo que percorre uma lista e apresente os seus valores
        const nomes=['Alberto', 'Teresa', 'Maria', 'Ivandro', 'Angelino', 'João', 'Quelcia', 'Maria', 'Moisés'];
        for(const nome of nomes){
            console.log(`${nome}`);
        }
        


