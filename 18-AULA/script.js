// // LAÇOS DE REPETIÇÃO


// // FOR = DURANTE / DURRANTE

// //  I = VÁRIAVEL DE CONTROLE
// //  I < 10 = DURAÇÃO DO LAÇO
// //  I ++ AUMENTA O LAÇO DE 1 EM 1
// for( var i = 0; i  <= 5; i++ ) {
//     console.log("Eu sou o melhor")
//     console.log(i)
// }
// console.log("Acabou de acabar")


// // WHILE = ENQUANTO

// var contagem = 1
// while(contagem <= 2) {
//      console.log("oi, meu chará")
//      console.log(contagem)

// }
// console.log("fi na li zou")

// // ARRAY

// var lista = ['arroz', 6, true, "outro", 7.7, "Dougras"]

// // MOSTRA O ARRAY

// console.log(lista)

// // mostra o elemento específico
// console.log(lista[3])


// // LENGHT - retorna o número de itens do ARRAY
// console.log(lista.length)

// // LISTA DE TIMES

// var times = ["São Paulo", "Vasco da Gama", "Santos", "Real Madrid", "Desportiva"]

// for(var i = 0; i <5; i++){
//     console.log("o Time atual é: ", times[i]);
// }


// Funções para interagir com um Array
var frutas = ["melancia", "Melão", "Morango"]

// Arrya Original
console.log(frutas)

// ÁREA DE ADIÇÃO DE ELEMENTOS

// PUSH ADICIONA AO FIM DO ARRAY
frutas.push("Uva")

// UNSHIFT - Adiciona o início do Array
frutas.unshift("Marácuja")

// PARA A REMOÇÃO DE ELEMENTOS

// POP - REMOVE O ULTIMO ELEMENTO
var frutaRetirada = frutas.pop()

// SHIFT - REMOVE DO INCIO DO ARRAY
var exPrimeiraFruta = frutas.shift()

// Descobrir um valor específico nesse array

// INclude Verifica
console.log("Garlom tem pitu?", frutas.includes("pitu"));

// SORT - ORDENA O ARRAY
frutas.sort()


// REVERSE - INVERTER O ARRAY
frutas.reverse();

// CONVERTENDO UM ARRAY
console.log(frutas.toString())


// SLICE - COPIA


// SPLICE - para remover
var removidos = frutas.splice(1,2)


// SPLICE - PARA ADICIONAR
frutas.splice(2,0,)