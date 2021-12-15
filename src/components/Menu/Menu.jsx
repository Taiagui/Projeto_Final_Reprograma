import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import './menu.styles.css'


const Menu = () =>{
  return(
    <div className="navbargeralgrande">
    <nav>
      <div className="navbargeral">
      <ul className="navbar">
      <li>
        <Link title="Home" className="link" to="/">Home</Link>
      </li>
      <li>
        <Link title="Cadastro" className="link" to="/cadastro">Cadastro</Link>
      </li>
      <li>
        <Link title="Nossas Autoras" className="link" to="/nossasautoras">Nossas Autoras</Link>
      </li>
      <li>
        <Link title="Contação de Histórias" className="link" to="/contacaoDeHistorias">Contação de Histórias</Link>
      </li>
      <li>
        <Link className="link" to="/contato">Contato</Link>
      </li>
      <li>
      <Link className="pesquisar"> 
          <button type="button">
            <BiSearchAlt/>
            </button>
            <input type="Search" 
            name="search" 
            id="search" 
            placeholder="Pesquisar" 
          required />
            </ Link>
      </li>
      </ul>
      </div>
      </nav>
      </div>
  )
}

export default Menu
