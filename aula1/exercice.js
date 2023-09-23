
// ----------

// const name = "Paloma"
// const age = 22
// const city = "Petrolina"
// const isSlave = true; 
// console.log( {name},{age},{city},{isSlave} )

// --------------------

// // Crie uma constante chamada perimeter e atribua a ela o resultado da soma de todos os lados de um retângulo.
// const base = 5
// const height = 8

// const perimeter = base * 2 + height * 2;

// ---------------------------

// let note  =  60


// if(note > 79){
//     console.log("Parabéns,você faz parte do grupo de pessoas aprovadas!")
// } else if(note > 59){
//     console.log("Você está na nossa lista de espera")
// } else{
//     console.log("infelizmente você reprovou!")
// }



// ----------------

// noteOne = parseInt(prompt("Informe a primeira nota"))
// noteTwo = parseInt(prompt("Informe a segunda nota"))


// let average = (noteOne + noteTwo)/2

// if (average == 10){
//     alert("Aprovado com Distinção")
// }else if(average > 6.99 && average < 10){
//     alert("Aprovado")
// }else{
//     alert("Reprovado")
// }

// ------------------------

// let numberOne = parseInt(prompt("Digite um número"))
// let numberTwo = parseInt(prompt("Digite um número"))
// let numberThree= parseInt(prompt("Digite um número"))
// let higherNumber = 0;

// if(numberOne > numberTwo){
//     if(numberOne > numberThree){
//         higherNumber = numberOne
//     }else{
//         higherNumber = numberThree
//     }
// }else if(numberTwo > numberThree){  
//     higherNumber = numberTwo
// } else{
//     higherNumber = numberThree
// }

// alert("O maior numero e " + higherNumber)


// --------------------------

// let turno = prompt("Em qual turno nocê estuda?")

// if (turno.toUpperCase() == "MANHA" || turno.toUpperCase() == "MANHÃ" || turno.toUpperCase() == "MATUTINO"){
//     alert("Bom dia")
// }
// else if(turno.toUpperCase() == "VESPERTINO" || turno.toUpperCase() == "TARDE"){
//     alert("Boa Tarde")
// } else if(turno.toUpperCase() == "NOTURNO" || turno.toUpperCase() == "NOITE"){
//     alert("Boa Noite")    
// }else{
//     alert("Valor inválido")
// }

// --------------------------

// let name = prompt("Qual o nome do colaborador?");
// let wage = parseFloat(prompt("Informe o salário"));
// let addWage = 0;
// let newWage = 0; 
// let percentage = 0;

// if(wage < 280.00){
//     percentage = "20%"
//     addWage = wage * 0.2;
//     newWage = wage + addWage;
// }else if(wage >  280.00 && wage < 700.00){
//     percentage = "15%"
//     addWage = wage * 0.15;
//     newWage = wage + addWage;

// }else if(wage > 700.00 && wage < 1500.00){
//     percentage = "10%"
//     addWage = wage * 0.1;
//     newWage = wage + addWage;
// }else{
//     percentage = "5%"
//     addWage = wage * 0.05;
//     newWage = wage + addWage;
// }




// alert("Colaborador: " + name + "\n" + "Salario Atual: " + wage + "\n" + "Porcentual Aplicado: " + percentage + "\n"+ "Valor Acrescentado: " +  addWage.toFixed(2) + "\n" + "Salario com Acrescimo: " + newWage.toFixed(2))

// --------------------------

// let num1 = 4;
// let num2 = 5;

// //operacoes

// let adicao = num1 + num2;
// let subtracao = num1 - num2;
// let multiplicacao = num1 * num2;
// let divisao = num1 / num2;

// console.log(adicao, subtracao, multiplicacao, divisao)
