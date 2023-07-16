import {useFormik} from 'formik'

const FormularioCadastro = () => {
    const formik = useFormik({
        initialValues: {
            nome: '',
            cidade: '',
            estado: '',
            email: '',
            senha: '', 
            confsenha: '',
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            onChange={formik.handleChange}
            value={formik.values.nome}
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            name="cidade"
            onChange={formik.handleChange}
            value={formik.values.cidade}
          />
          <label htmlFor="estado">Estado</label>
          <input
            id="estado"
            name="estado"
            type="estado"
            onChange={formik.handleChange}
            value={formik.values.estado}
          />
           <Field name="identidade" as="selecao">
                <option value="mulher-cis">Mulher cisgênero</option>
                <option value="homem-cis">Homem cisgênero</option>
                <option value="mulher-trans">Mulher transgênero</option>
             </Field>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.senha}
          />
          <label htmlFor="conf-senha">Confirme sua senha</label>
          <input
            id="conf-senha"
            name="conf-senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confsenha}
          />
          <button type="submit">Enviar</button>
        </form>
      );
}

export default FormularioCadastro