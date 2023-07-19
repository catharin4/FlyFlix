import React from "react"
import flyNOME from "./flyNOME.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className='banner__content'>
<<<<<<< HEAD
      <img src={flyNOME} alt='FlyFlix' />
      <p className='text-banner'>
        Mais que um site para ex-alunas e para as novas alunas: um guia para tirar dúvidas e aprender a partir do básico.
=======
      <img className='banner_img' src={flyNOME} alt='FlyFlix' />
      <p>
        Mais que um site para ex-alunas e para as novas alunas: um guia para
        tirar dúvidas e aprender a partir do básico.
>>>>>>> e5a92612016eb2aefe4f2cb2ac306c64cfadc37e
      </p>
    </div>
  )
}

export default Header
