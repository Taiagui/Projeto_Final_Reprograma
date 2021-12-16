import './header.styles.css'

const Header = (props) => {
 return (
    <div className="header">
      <h1>{props.children}</h1>
      <img className="imagemPrincipal" src={props.image} alt='ilustracao de menina' />
    </div>
  )
}

export default Header 