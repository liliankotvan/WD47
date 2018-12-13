const btn = document.querySelector("#btnMudaLayout")
const mural = document.querySelector(".mural")

function alteraNome(){
    if(btn.textContent == "Blocos"){
        btn.textContent="Linhas"
    } else {
        btn.textContent= "Blocos"
    }
}

function mudaClasse(){
    mural.classList.toggle("mural--linha")
}

btn.addEventListener("click",mudaClasse)
btn.addEventListener("click", alteraNome)
btn.classList.remove("no-js")


