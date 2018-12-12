const btn = document.querySelector("#btnMudaLayout")
const mural = document.querySelector(".mural")

function alteraNome(){
    if(btn.textContent == "Linhas"){
        btn.textContent="Blocos"
    } else {
        btn.textContent= "Linhas"
    }
}

function mudaClasse(){
    mural.classList.toggle("mural--linha")
}

btn.addEventListener("click",mudaClasse)
btn.addEventListener("click", alteraNome)
btn.classList.remove("no-js")


