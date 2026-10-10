console.log("SHAZAM")

var musicas = [ "Rap da Akatsuki", "Tipo Tobi", "Gato de Schrodinger"]
var cantores = [ "7 Minutoz", "MhRap", "chrono Rapper"]

for(var i = 0; i < musicas.length; i++){
    console.log(musicas[i], "-", cantores[i]);
}

// OBJETO
var filme1 = {
    // Estrtutura do objeto
    // "chave" : "valor"

    titulo: "Rei Leão",
    genero: "Animation",
    ano_lan: 1994
}
console.log(filme1);

// ACESSANDO UMA CHAVE ESPECICICIFÍQUICIMA
console.log(filme1.titulo);

// Acessando com o apóstofro (crase)
console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.ano_lan} `);

console.log(`Gênero: ${filme1["genero"]}`);


var intervalo = {
    hora: "Intervalo",
    fazer: "truco",
    lugar: "mesa",
    quem: "pessoas"
}

console.log(`na hora do ${intervalo.hora}, nós jogamos ${intervalo.fazer}, na ${intervalo.lugar} com ${intervalo.quem}, e depois voltamos para a sala`);

// OBJETO VAZIO
var garrafa = {}

console. log(garrafa)

// criar as propriedades
garrafa.cor = "Bege"
garrafa.preco = 99
garrafa.tamanho = "710ml"
garrafa["tampada"] = false
console.log(garrafa)

// altera uma propriedade existente
garrafa.cor = "Vermelho"
console.log(garrafa)


console.log("======CRIADOR DE GARRAFAS=====");
console.log("meu mano você irá criar propriedades para a sua garrafa personalizada");

// var novaPropriedade = prompt("Nova propriedade:")
// garrafa[novaPropriedade] = prompt("Valor:")
// console.log(garrafa[novaPropriedade]);



var leao = {
    nome: "simba",
    temPelo: true,
    especie: "Doméstico",
    peso: 60,

    // Métodos
    andar: function(){
        console.log("andando...")
    },
    falar: () => {
        console.log("MIAU...")
    }
}
console.log(leao)

console.log(leao.andar)

// EXECUTAR O MÉTODOS
leao.falar()