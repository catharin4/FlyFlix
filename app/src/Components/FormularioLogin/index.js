import React from "react"
import FormularioLogin from "./FormularioLogin.css"
import Botao from "../Botao/Botao";

const FormularioLogin = () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Verifica se o e-mail está preenchido e se é válido
        if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
            alert("Por favor, preencha o seu e-mail");
            return;
        }

        // Verifica se a senha está preenchida
        if (!validatePassword(passwordInput.value, 8)) {
            alert("A senha precisa ter no mínimo 8 dígitos.");
            return;
        }

        // Se todos os campos estiverem corretamente preenchidos, envie o form
        form.submit();
        location.href = "carrossel.html";
    });

    // Função que valida e-mail
    function isEmailValid(email) {

        // cria uma regex para validar email
        const emailRegex = new RegExp(
            // usuario12@host.com
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if (emailRegex.test(email)) {
            return true;
        }

        return false;
    }

    //Função que valida a senha
    function validatePassword(password, minDigits) {
        if (password.length >= minDigits) {
            // Senha válida
            return true
        }

        // Senha inválida
        return false
    }
    return (
        <form className="form">
            <label for="email">Email: </label>
            <input type="email" id="email" />

            <label for="password">Senha: </label>
            <input type="password" id="password" />

            <Botao></Botao>
        </form>
    )
}

export default FormularioLogin
