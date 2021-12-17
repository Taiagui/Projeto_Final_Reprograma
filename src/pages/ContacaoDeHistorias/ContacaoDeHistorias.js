import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ImagemContacao from '../../assets/topoTodos.jpg'
import './historias.styles.css'

const contacaoDeHistorias = () => {
  return(
    <>
      <Menu />
      <Header image={ImagemContacao}></Header>
      <div className="texto">
      <h1 className="textovisualfinalContacao">
     .......          .......
      </h1>
     
      </div>
      <Footer />
    </>
  )
}

export default contacaoDeHistorias
