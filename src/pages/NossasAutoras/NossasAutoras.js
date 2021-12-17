import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Main from "../Main/Main"
import autoras from "../../Data/Database"
import imagemAutora from "../../assets/topoTodos.jpg"


import "./autoras.styles.css"

const NossasAutoras = () => {
    return (
        <>
        < Menu />
        < Header image={imagemAutora}/>
        <Main>
            <div className="container">
            <h1 className="textovisualfinalAutoras">
     .......     Nossas Autoras     .......
      </h1>
            <div className="todasAutoras">
             {autoras.map(autoras =>
             <ul className="blocoAutoras" key={autoras.id}>
                <p>{autoras.autora}</p>
                <img className="imagemLivros" src={autoras.capa} alt={autoras.name} />
             </ul>
                )}
            </div>
            </div>
        </Main>
        < Footer />
        </>
    )

}

export default NossasAutoras