 /*
 - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - Passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - Passo 2 - Pegar no JS o elemento HTML corresponde ao body
        - Passo 3 - Identificar o clique do usuário no botão de troca de tema
        - Passo 4 - adicionar a classe modo-escuro no body
        - Passo 5 - trocar a imagem do botão de alterar tema pra lua
    
- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - Passo 6 - verificar se o body já tem a classe modo-escuro
        - Passo 7 - remover a classe do modo-escuro do body
        - Passo 8 - trocar a imagem do botão de alterar tema pra sol
*/
// Passo 1
const botaoAlterarTema = document.getElementById("botao-alterar-modo");
// Passo 2
const body = document.querySelector("body"); // querySelector = Consultar seletor
// Imagem passo 5
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")

// Passo 3
botaoAlterarTema.addEventListener("click", () => { // () => {} = Arrow Function
    // Passo 6
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    // Passo 4 e 6
    body.classList.toggle("modo-escuro") // .toggle vai ficar alternando o modo

    // Passo 5
    if (modoEscuroAtivo) {
            imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/lua.png")
        } else {
            // Passo 8
            imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sol.webp")
        }
});