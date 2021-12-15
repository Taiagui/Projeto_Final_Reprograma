import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ImagemContacao from '../../assets/topoTodos.jpg'
import './historias.styles.css'

const contacaoDeHistorias = () => {
  return(
    <>
      <Menu />
      <Header image={ImagemContacao}>Meus projetos</Header>
      <Footer />
    </>
  )
}

export default contacaoDeHistorias
