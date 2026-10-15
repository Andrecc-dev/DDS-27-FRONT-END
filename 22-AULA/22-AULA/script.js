// // Console - terminal do Navegador

// console.log("oi")

// // Windows - Janela do Navegador    
// alert()
// prompt()

// Conteúdo  - Conhecido com DOM - Conhecido como seu código HTML Inteiro
console.log(document)

console.log(document.head)
console.log(document.body)

// SEÇÃO ou SELEÇÃo

// Seleciona elementos pela TAG (Sempre será elementos)
var titulos = document.getElementsByTagName("body")
console.log(titulos)

// Seleciona elementos pela CLASSE
var paragrafo = document.getElementsByClassName("para")
console.log(paragrafo)

// seleciono Elemento por ID
var especifico = document.getElementById("p3")
console.log(especifico)

// Alteração de Estilos
// Pego pelo ID
especifico.style.backgroundColor = "Green"
especifico.style.color = "White"

// Pela classe
paragrafo[0].style.backgroundColor = "pink"

// PELA TAG
titulos [2].style.backgroundColor = "orange"

//  SELÃO 2
// FUnção ativdada mais criada pelo JavaScript
function cliquei(){
    console.log("SAAAAAAAAAAAIIIIIIIIIIIIII");
    
}

// FUnção ativdada mais criada pelo JavaScript, via eventListenner

var cliques

document.getElementById("bntCliqueDuplo").addEventListener("dblclick", () => {

    bntCLiqueDuplo() = cliques + 1
    console.log(cliques)

})

// SEÇÃO 3
// ALTERA O TEXTO
document.getElementById("criaTexto").addEventListener("click", () => {

// INNERTEXT - TEXTCONTENT
document.getElementById("textoCriado").innerText = "Fale que ia mudar, toma ai"



})
// ALTERA O HTML
document.getElementById("criaHtml").addEventListener("click", () =>{


document.getElementById("vazia").innerText = "<h2> AHAHAHAHHAHAHAH </h2>"})