const form = document.querySelector("#form")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("submit", (event) => {
    event.preventDefault();

// Verifica se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

// Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos.");
        return;
    }

// Se todos os campos estivrem corretamente preenchidos, envie o form
    form.submit();
});

// Função que valida e-mail
    function isEmailValid(email){

        // cria uma regex para validar email
        const emailRegex = new RegExp(
            // usuario12@host.com
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if(emailRegex.test(email)) {
            return true;
        }

        return false;
    }

    //Função que valida a senha
    function validatePassword(password, minDigits) {
        if(password.length >= minDigits) {
            // Senha válida
            return true
        }

            // Senha inválida
            return false
    }