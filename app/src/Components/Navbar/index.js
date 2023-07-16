import React, { useState } from "react"
import "./Navbar.css"
import logo from "../../logo.svg"
import imagemCadastro from "./Vector.svg"

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className='navigation'>
      <a href='/' className='brand-name'>
        <img src={logo} alt='Logo' />
      </a>
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='#7CB436'
        >
          <path
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href='/'>Início</a>
          </li>
          <li>
            <a href='/cadastro'>
              <img alt='' src={imagemCadastro} />
            </a>
          </li>
          {/* <li>
            <a href='/contato'>Contato</a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
