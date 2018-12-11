var btnLayout = document.querySelector("#btnMudaLayout")
var mural = document.querySelector(".mural")

function alteraNome(){
    if(btnLayout.textContent == "Linhas"){
        btnLayout.textContent="Blocos"
    } else {
        btnLayout.textContent= "Linhas"
    }

}

function mudaClasse(){
    mural.classList.toggle("mural--linha")
}



btnLayout.addEventListener("click",mudaClasse)
btnLayout.addEventListener("click", alteraNome)