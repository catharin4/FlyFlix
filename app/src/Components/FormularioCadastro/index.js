import CampoTexto from "../CampoTexto/index.js"

const FormularioCadastro = (nome, cidade, estado, email, senha) => {
    return(
        <section className="Formulario">
            <form>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite aqui seu nome"
                    valor={nome}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cidade"
                    placeholder="Digite o sua cidade aqui"
                    valor={cidade}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Estado"
                    placeholder="Digite o seu estado aqui"
                    valor={estado}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Email"
                    placeholder="Digite o seu email aqui"
                    valor={email}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite a sua senha aqui"
                    valor={senha}
                />
            </form>
        </section>    
        
    )
}

export default FormularioCadastro