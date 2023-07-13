import { useState } from "react"
import CampoTexto from "../CampoTexto/index.js"

const FormularioCadastro = () => {
    
    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [identidade, setIdentidade] = useState('')
    const [orientacao, setOrientacao] = useState('')
    const [cor, setCor] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoCadastrar = (evento) => {
        evento.preventDefault()
        setNome('')
        setCidade('')
        setEstado('')
        setIdentidade('')
        setOrientacao('')
        setCor('')
        setEmail('')
        setSenha('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoCadastrar}>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite aqui seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cidade"
                    placeholder="Digite o sua cidade aqui"
                    valor={cidade}
                    aoAlterar={valor => setCidade(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Estado"
                    placeholder="Digite o seu estado aqui"
                    valor={estado}
                    aoAlterar={valor => setEstado(valor)}
                />
                <div className="opcoes">
                    <label>
                        Identidade de gênero:
                        <select name="identidade" value={identidade}>
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
                        <select name="orientacao" value={orientacao}>
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
                        <select name="cor" value={cor}>
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
                    aoAlterar={valor => setEmail(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite a sua senha aqui"
                    valor={senha}
                    aoAlterar={valor => setSenha(valor)}
                />
            </form>
        </section>    
        
    )
}

export default FormularioCadastro