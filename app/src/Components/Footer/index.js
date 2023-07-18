import React from "react"
import flyNOME from "../Header/flyNOME.svg"

const Footer = () => {
  return (
    <>
      <div className='flex-container'>
        <img className='rodape-imagem' src={flyNOME} alt='FlyFlix' />
        <div>
          <a href='/cadastro' target='_self'>
            <strong>Login</strong>{" "}
          </a>
        </div>
        <div>
          <a href='/cadastro' target='_self'>
            Cadastro
          </a>
        </div>
      </div>
      <div>
        <p class='rodape-text'>
          {" "}
          Para novas alunas, um guia para aprender a partir do básico.
        </p>
      </div>
    </>
  )
}

export default Footer
