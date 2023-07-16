import { useFormik, Field, FormikProvider } from 'formik'

const FormularioCadastro = () => {
  const validate = values => {
    const errors = {}
    if (!values.nome) {
      errors.nome = 'Obrigatório'
    } else if (values.nome.length < 1) {
      errors.nome = 'É necessário preencher esse campo'
    }
    if (!values.cidade) {
      errors.cidade = 'Obrigatório'
    } else if (values.cidade.length < 1) {
      errors.cidade = 'É necessário preencher esse campo'
    }
    if (!values.estado) {
      errors.estado = 'Obrigatório'
    } else if (values.estado.length < 1) {
      errors.estado = 'É necessário preencher esse campo'
    }
    if (!values.email) {
      errors.email = 'Obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido'
    }
    return errors
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      cidade: '',
      estado: '',
      identidade: '',
      orientacao: '',
      cor: '',
      email: '',
      senha: '',
      confsenha: '',
    },
    validate
  });
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          name="nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nome}
        />
        {formik.touched.nome && formik.errors.nome ? (
         <div>{formik.errors.nome}</div>
       ) : null}
        <label htmlFor="cidade">Cidade:</label>
        <input
          id="cidade"
          name="cidade"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cidade}
        />
        {formik.touched.cidade && formik.errors.cidade ? (
         <div>{formik.errors.cidade}</div>
       ) : null}
        <label htmlFor="estado">Estado:</label>
        <input
          id="estado"
          name="estado"
          type="estado"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.estado}
        />
        {formik.touched.estado && formik.errors.estado ? (
         <div>{formik.errors.estado}</div>
       ) : null}
        <label htmlFor='identidade'>Identidade de gênero:</label>
        <Field name="identidade" as="select">
          <option value="mulher-cis">Mulher cisgênero</option>
          <option value="homem-cis">Homem cisgênero</option>
          <option value="mulher-trans">Mulher transgênero</option>
          <option value="homem-trans">Homem transgênero</option>
          <option value="nao-bi">Não binário</option>
          <option value="fluido">Gênero fluído</option>
          <option value="prefere-n">Prefiro não responder</option>
        </Field>
        <label htmlFor='orientacao'>Orientação sexual:</label>
        <Field name="orientacao" as="select">
          <option value="heterossexual">Heterossexual</option>
          <option value="homossexual">Homossexual</option>
          <option value="bissexual">Bissexual</option>
          <option value="assexual">Assexual</option>
          <option value="panssexual">Panssexual</option>
          <option value="prefiro-n">Prefiro não responder</option>
        </Field>
        <label htmlFor='cor'>Cor ou raça:</label>
        <Field name="raca-cor" as="select">
          <option value="preto">Preto</option>
          <option value="branco">Branco</option>
          <option value="pardo">Pardo</option>
          <option value="indigena">Indigena</option>
          <option value="amarelo">Amarelo</option>
          <option value="prefiro-nao">Prefiro não responder</option>
        </Field>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          name="senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.senha}
        />
        <label htmlFor="conf-senha">Confirme sua senha:</label>
        <input
          id="conf-senha"
          name="conf-senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confsenha}
        />
        <button type="submit">Enviar</button>
      </form>
    </FormikProvider>
  );
}

export default FormularioCadastro