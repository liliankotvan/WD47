var btnLayout = document.querySelector("#btnMudaLayout")

function alteraNome(){
    if(btnLayout.textContent == "Linhas"){
        btnLayout.textContent="Blocos"
    } else {
        btnLayout.textContent= "Linhas"
    }

}

btnLayout.onclick = alteraNome