function opcoes() {
    console.log("as opções são", this.tamanho.toString())
}



var produto1 = {
    nome: "Coca-Cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanho: ["200ml", "Lata", "600ml", "2L", "Ks"],
    descrição: function(){
        console.log(`A ${this.nome} é da catigoria ${this.categoria}`);
        
    },

    verTamanhos: opcoes
}

var produto2 = {
    nome: "Coxinha",
    categoria: "salgado",
    quantidade: 30,
    tamanho: [ "P", "M", "G" ],
    descrição: function(){
        console.log(`A ${this.nome} é da catigoria ${this.categoria}`);
        
    }
}

produto1.descrição()
produto1.verTamanhos()








































































// var aluno = {
//     nome: "Cristiano Ronaldo",
//     anoEscolar: "7°",
//     turma: "C",
//     notas: [6, 7, 8],
//     media: function() {
//         var n1 = this.notas[0];
//         var n2 = this.notas[1];
//         var n3 = this.notas[2];

//         return ((n1 + n2 + n3) / 3);
//     }
// };

// console.log(aluno.media());