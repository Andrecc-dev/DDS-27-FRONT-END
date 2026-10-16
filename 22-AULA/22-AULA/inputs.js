/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

// Evento Change
// CHANGE DISPARA QUNADO O USUÁRIO SAI DA CAIXINHA
document.getElementById("campoChange").addEventListener("change", () =>{

    // PEGA O VALOR DIGITADO PELO USUÁRIO E TROCAO QUANDO O USUÁRIO SAI DO FOCO
    const textoDigitado = document.getElementById("campoChange").value

    // PEGA O TEXTO E TROCA ELE PELO VALOR QUE A PESSOA DIGITOU E EU
    // GUARDEI NA VARIÁVEL  
    document.getElementById("resultadoChange").innerText = "Você digitou:" + textoDigitado;
})

// EVENTO INPUT

// INPUT DISPARA QUNADO O USUÁRIO ALTERA O DA CAIXINHA
document.getElementById("campoInput").addEventListener("input", function (){

    // PEGA O VALOR DIGITADO PELO USUÁRIO E TROCA ENQUANTO TA DIGITANDO
    const textoDigitado = this.value

    // PEGA O TEXTO E TROCA ELE PELO VALOR QUE A PESSOA DIGITOU E EU
    // GUARDEI NA VARIÁVEL
    document.getElementById("resultadoInput").innerText = textoDigitado
})

// ============================================================================== //

// GUARDA TODO O HTML DO FORMULÁRIO 
const formulario = document.getElementById("formJogador")

// E GUARAD TODO O HTML DA LISTA DE JOGADORES (QUE SE INCIA VAZIA)
const lista = document.getElementById("listaJogadores")

// FUNÇÃO PARA ATIVAR QUANDO O USUÁRIO ENVIAR OS DADOS
formulario.addEventListener("submit", function(Evento){

    // Parar de recarregar a página quando tenta eviar
    Evento.preventDefault()

    // VERIFICA O CONTEÚDO DIGIADO NAS CAIXINHAS, E GUARDA NAS VARIÁVEIS
    const inputNome = document.getElementById("nome").value
    const inputCamisa = document.getElementById("camisa").value
    const inputPosicao = document.getElementById("posicao").value
    const inpuIdadede = document.getElementById("idade").value

    // CRIAR UM OBJETO COM AS INFORMAÇÕES
    const jogador = {
        nome: inputNome,
        posicao: inputPosicao,
        camisa: inputCamisa,
        idade: inpuIdadede
    }

    // chama a função para adicionar o jogador
    adicionarJogador(jogador)

    formulario.reset()

})



// FUNÇÃO PARA CRIAR UM CARD 

function adicionarJogador(jogadorAtual){

    // CRIA O ELEMENTO  CARD PAI DE TODOS
    const card = document.createElement("div")

    // CRIA ELEMENTOS OD CARD
    const titulo = document.createElement("h4")
    const textoPosicao = document.createElement("p")
    const textoCamisa = document.createElement("p")
    const textoIdade = document.createElement("p")

    // PREENCHER OS ELEMENTOS, COM OS VALORES DO OBJETO
    titulo.textContent = jogadorAtual.nome
    textoPosicao.textContent = "posição:" + jogadorAtual.posicao
    textoCamisa.textContent = "camisa:" + jogadorAtual.camisa
    textoIdade.textContent = "Idade:" + jogadorAtual.idade

    // Contruo o Card
    card.appendChild(titulo)
    card.appendChild(textoPosicao)
    card.appendChild(textoCamisa)
    card.appendChild(textoIdade)

    // Adiciona o card como o filho da Lista de Jogadores
    lista.appendChild(card)
}