import React from "react"
import flyNOME from "./flyNOME.svg"

const Header = () => {
  return (
    <div className='banner__content'>
      <img src={flyNOME} alt='FlyFlix' />
      <p className='text-banner'>
        Mais que um site para ex-alunas e para as novas alunas: um guia para tirar dúvidas e aprender a partir do básico.
      </p>
    </div>
  )
}

export default Header
