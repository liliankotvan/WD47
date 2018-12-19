
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