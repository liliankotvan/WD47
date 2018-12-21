;(function(){
    const btnAjuda = $("#btnAjuda")
    btnAjuda.on("click", function(){
        const xhr = new XMLHttpRequest()                                 /*cria requisição*/
        xhr.open("GET", "https://ceep.herokuapp.com/cartoes/instrucoes") /*recebe xml - estabelece conexão*/
        xhr.responseType = "json"                   /* declara retorno das informações em formato de json"*/
        xhr.send()                                  /*envia requisição*/
        xhr.addEventListener("load", function(){    /*carrega os dads enviados pela conexão*/
            const objeto = xhr.response
            const ajudas = objeto.instrucoes

            ajudas.forEach(function(ajuda){
                cartao.adiciona(ajuda)
            })
        })
    })
    btnAjuda.removeClass("no-js")
})()





/*
;(function(){
    const btnAjuda = document.querySelector("#btnAjuda")
    btnAjuda.addEventListener("click", function(){
        const ajudas = [
            {conteudo: "Bem Vindo ao CEEP", cor:"#F05450"}
            ,{conteudo: "Clique no  Botão Linhas para Alterar o Layout", cor: "#92C4EC"}
        ]
        ajudas.forEach(function(ajuda){
            cartao.adiciona(ajuda)
        })
    })
    btnAjuda.classList.remove("no-js")
})()
*/

/*
;(function(){
    const btnAjuda = $("#btnAjuda")
    btnAjuda.on("click", function(){
        const ajudas = [
            "Bem Vindo Ao CEEP"
            , "Clique no btn Linhas para mudar o Layout"
        ]
        ajudas.forEach(function(ajuda){
            alert(ajuda)
        })
    })
    btnAjuda.removeClass("no-js")
})()
*/