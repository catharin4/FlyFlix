import React from "react"
import flyNOME from "../Header/flyNOME.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className='flex-container'>
        <img className='rodape-imagem' src={flyNOME} alt='FlyFlix' />
        <div>
          <ul>
            <li>
              <a href="/" target="_self" type="none">Inicio</a>
            </li>
            <li>
              <a href="/login" target="_self" type="none">Login</a>
            </li>
            <li>
              <a href="/cadastro" target="_self" type="none">Cadastro</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
