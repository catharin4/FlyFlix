import React from "react"
import "./FormularioLogin.css"
import Botao from "../Botao/Botao";
import { FormikProvider } from 'formik'
import { Container, TextField } from "@material-ui/core";

const FormularioLogin = (formik) => {
    return (
        <Container fixed >
            <FormikProvider value={formik}>
                <h2 className="titulo">Login</h2>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <TextField
                        variant="outlined"
                        multiline
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="senha">Senha:</label>
                    <TextField
                        variant="outlined"
                        multiline
                        id="senha"
                        name="senha"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </form>
                <Botao />
            </FormikProvider>
        </Container>
    )
}

export default FormularioLogin
