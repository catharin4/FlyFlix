import React from "react"
import flyNOME from "./flyNOME.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className='banner__content'>
      <img className='banner_img' src={flyNOME} alt='FlyFlix' />
      <p>
        Mais que um site para ex-alunas e para as novas alunas: um guia para
        tirar dúvidas e aprender a partir do básico.
      </p>
    </div>
  )
}

export default Header
