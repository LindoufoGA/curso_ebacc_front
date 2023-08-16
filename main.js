const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2')
    const mensagemSucesso = 'Permitido'

    if (numero2.value > numero1.value) {
        const sucesso = document.querySelector('.mensagemSucesso');
        sucesso.innerHTML = mensagemSucesso
        sucesso.style.display = 'block'
    }
    else{
        numero1.style.border = '1px solid red'
        document.querySelector('.error').style.display = 'block'
        }
})