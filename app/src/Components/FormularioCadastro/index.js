import React from 'react'
import { useFormik, Field, FormikProvider } from 'formik'
import Botao from '../Botao/Botao'
import { TextField, Container } from '@material-ui/core'
import './FormularioCadastro.css'

const FormularioCadastro = () => {
  const validate = (values) => {
    const errors = {}
    if (!values.nome) {
      errors.nome = "Obrigatório"
    } else if (values.nome.length < 1) {
      errors.nome = "É necessário preencher esse campo"
    }
    if (!values.cep) {
      errors.cep = "Obrigatório"
    } else if (values.cep.length < 1) {
      errors.cep = "É necessário preencher esse campo"
    }
    if (!values.endereco) {
      errors.estado = "Obrigatório"
    } else if (values.estado.length < 1) {
      errors.estado = "É necessário preencher esse campo"
    }
    if (!values.email) {
      errors.email = "Obrigatório"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email inválido"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      dataNascimento: '',
      endereco: '',
      cep: '',
      identidadeGenero: '',
      orientacaoSexual: '',
      corRaca: '',
      senha: '',
      confirmar: '',
    },
    validate,
  })
  return (
    <Container fixed>
      <FormikProvider value={formik}>
        <h2 className='titulo'>Cadastro</h2>
        <form className='formulario' onSubmit={formik.handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <TextField
            variant="outlined"
            multiline
            id="nome"
            name="nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome ? (
            <div>{formik.errors.nome}</div>
          ) : null}
          <label htmlFor="email">Email:</label>
          <TextField
            variant="outlined"
            multiline
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
          <label htmlFor='dataNascimento'>Data de nascimento: </label>
          <input
            variant='outlined'
            multiline
            id='dataNascimento'
            name='dataNascimento'
            type='date'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dataNascimento}
          />
          <label htmlFor="endereco">Endereço:</label>
          <TextField
            variant="outlined"
            multiline
            id="endereco"
            name="endereco"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco}
          />
          {formik.touched.endereco && formik.errors.endereco ? (
            <div>{formik.erro.endereco}</div>
          ) : null}
          <label htmlFor="cep">CEP: </label>
          <TextField
            variant="outlined"
            multiline
            id="cep"
            name="cep"
            type="cep"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cep}
          />
          {formik.touched.estado && formik.errors.estado ? (
            <div>{formik.errors.estado}</div>
          ) : null}
          <label htmlFor='identidadeGenero'>Identidade de gênero:</label>
          <Field fullWidth variant="outlined" select name="identidade" as="select">
            <option value="mulher-cis">Mulher cisgênero</option>
            <option value="homem-cis">Homem cisgênero</option>
            <option value="mulher-trans">Mulher transgênero</option>
            <option value="homem-trans">Homem transgênero</option>
            <option value="nao-bi">Não binário</option>
            <option value="fluido">Gênero fluído</option>
            <option value="prefere-n">Prefiro não responder</option>
          </Field>
          <label htmlFor='orientacaoSexual'>Orientação sexual:</label>
          <Field fullWidth variant="outlined" select name="orientacao" as="select">
            <option value="heterossexual">Heterossexual</option>
            <option value="homossexual">Homossexual</option>
            <option value="bissexual">Bissexual</option>
            <option value="assexual">Assexual</option>
            <option value="panssexual">Panssexual</option>
            <option value="prefiro-n">Prefiro não responder</option>
          </Field>
          <label htmlFor='corRaca'>Cor ou raça:</label>
          <Field fullWidth variant="outlined" select name="raca-cor" as="select">
            <option value="preto">Preto</option>
            <option value="branco">Branco</option>
            <option value="pardo">Pardo</option>
            <option value="indigena">Indigena</option>
            <option value="amarelo">Amarelo</option>
            <option value="prefiro-nao">Prefiro não responder</option>
          </Field>
          <label htmlFor="senha">Senha:</label>
          <TextField
            variant="outlined"
            multiline
            id="senha"
            name="senha"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.senha}
          />
          {formik.touched.senha && Boolean(formik.errors.senha)}
          <label htmlFor="confirmar">Confirme sua senha:</label>
          <TextField
            variant="outlined"
            multiline
            id="confirmar"
            name="confirmar"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confsenha}
          />
          {formik.touched.confirmar && Boolean(formik.errors.confirmar)}
          <Botao />
        </form>
      </FormikProvider>
    </Container>
  );
}

export default FormularioCadastro
