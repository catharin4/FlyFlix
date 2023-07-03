import CampoTexto from "../CampoTexto/index.jss"

const FormularioCadastro = () =>{
    return(
        <section className="Formulario">
            <form>
                <h2>Faça seu cadastro</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite aqui seu nome"
                    valor={nome}
                />
                <div className="Data">
                    <label>Data de nascimento</label>
                    <input
                        type="date"
                        label="Data"
                    />
                </div>
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
                
            </form>
        </section>    
        
    )
}

export default FormularioCadastro