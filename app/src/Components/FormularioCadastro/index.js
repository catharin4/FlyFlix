import CampoTexto from "../CampoTexto/index.js"

const FormularioCadastro = (nome, cidade, estado, email, senha) => {
    return(
        <section className="formulario">
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
                <div className="opcoes">
                    <label>
                        Identidade de gênero:
                        <select name="identidade">
                            <option value="mulher-cis">Mulher cisgênero</option>
                            <option value="hetero-cis">Homem cisgênero</option>
                            <option value="mulher-trans">Mulher transgênero</option>
                            <option value="homem-trans">Homem transgênero</option>
                            <option value="nao-bi">Não binário</option>
                            <option value="agenero">Agênero</option>
                            <option value="n-prefere">Prefiro não responder</option>
                        </select>
                    </label>
                    <label>
                        Orientação sexual:
                        <select name="orientacao">
                            <option value="heterossexual">Heterossexual</option>
                            <option value="homossexual">Homossexual</option>
                            <option value="bissexual">Bissexual</option>
                            <option value="asssexual">Assexual</option>
                            <option value="pansexual">Pansexual</option>
                            <option value="n-prefere">Prefiro não responder</option>
                        </select>
                    </label>
                    <label>
                        Cor ou raça:
                        <select name="cor">
                            <option value="branco">Branco</option>
                            <option value="preto">Preto</option>
                            <option value="pardo">Pardo</option>
                            <option value="indigina">Indigena</option>
                            <option value="amarelo">Amarelo</option>
                            <option value="n-prefere">Prefiro não responder</option>
                        </select>
                    </label>
                </div>
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
                <CampoTexto
                    obrigatorio={true}
                    label="Confirme a senha"
                    placeholder="Digite a sua senha aqui"
                    valor={senha}
                />
            </form>
        </section>    
        
    )
}

export default FormularioCadastro