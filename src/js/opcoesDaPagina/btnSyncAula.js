;(function(){
    const btnSync = document.querySelector("#btnSync")
    btnSync.addEventListener("click", function(){
        const xhr = new XMLHttpRequest()                                 /*cria requisição*/
        xhr.open("POST", "https://ceep.herokuapp.com/cartoes/instrucoes") /*envia xml - estabelece conexão*/
        xhr.setRequestHeader ("Content-Type", "application/json") 

        const cartoes = document.querySelectorAll(".cartao") /*retorna NodeList. Não é array*/
        const infos = {
            cartoes: Array.from(cartoes).map(function(cartao){  /*transformar num array para trabalhar com map*/
                return {                        /*retorna um objeto*/
                    conteudo: cartao.querySelector(".conteudo").textContent, /*pegar o conteúdo*/
                     cor: getComputedStyle(cartao).getPropertyValue("background-color")  /*pegar a cor do CSS*/
                } 
            })                   
        }    /*map retorna um array do mesmo tamanho que a inicial. Pode usar o filter para filtrar dados */
        xhr.send(JSON.stringify(infos))    /*envia os dados, precisa transformar o objeto (infos) em um json*/
        xhr.addEventListener("load", function(){    /*feedback para usuário da request*/
           alert(`Foram criados ${JSON.parse(xhr.response.quantidade)}
                    cartoes.`)  /*passa de json para objeto e utiliza o template string para escrever o html*/
            })
        })
    })
    btnSync.classList.remove("no-js")
})()
