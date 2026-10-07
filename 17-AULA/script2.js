// // DESVIOS CONDICIONAIS

// //  IF = SE

// var estarVivo = false

// // PRIMEIRA COMPARAÇÃO
// if(estarVivo) {
//     console.log("parabéns por estar vivo")

// }

// // SEGUNDA COMPARAÇÃO, SO VEM PRA CÁ SE A PRIMEIRA DER ERRADO
// else if (estarVivo == undefined){
//     console.log("é Complicado mano")
// }

// //  ULTIMO CASO, SÓ ENTRA AQUI SE TODOS A CIMA DEREM ERRADO
// else{
//     console.log("F no chat rapaziada")
// }


// // SWITCH CASE

// var camisa = "marrom"

// switch(camisa){
//     case "preta":
//         console.log("parabéns, você acaba de ganhar um VINIL da Sabrina carpenter")
//     break

//     case "Branca":
//         console.log("Parabén, você acabou de ganhar o Body Splash da Virginia")
//     break

//     case "Vermelha": console.log("Parabén, você ganhou uma FERRARI 3 PORTAS, COM TETO SOLAR E ESCADA")
//     break

//     default:
//         console.log("Puxa a vida, você não está na palheta correta, volte na próxima.")
//     break
        
// }

// // PROMPOT - INTERAGE COM O USUÁRIO E COLETA UM VALOR

// var preferido = prompt("Qual é o seu pef favorito dos filmes: ")

// console.log("Seu PET preferido é: ", preferido)

console.log("==== Bem vindo ao transportador oficial de caixas")


var a = Number(prompt("informe o tamanho da primeira caixa:"))
var b = Number(prompt("informe o tamanho da segunda caixa:"))
var c = Number(prompt("informe o tamanho da terceira caixa:"))


if (a >= 1 && a <= b && b <= c && c <= 1000) {
    var viagens;

    if ((a + b < c) || (a < b && b < c)) {
        viagens = 1;
    } 

    else if (a < b || b < c) {
        viagens = 2;
    } 

    else {
        viagens = 3;
    }

    console.log("Ela fará:", viagens)
} 
else {
    console.log("valor fornecido não pode ser transportado pelo drone")
}