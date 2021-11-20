import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageAbout from '../../assets/about.svg'
import Footer from '../../components/Footer/Footer'


import './sobre.styles.css'
const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageAbout}>Sobre mim</Header>
    <div className='main'>
      <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="foto" />
      <div>
        <h2>Simara Conceição</h2>
        <p>Desenvolvedora na ThoughtWorks</p>
        <p>Professora na Reprograma</p>
        <p>Criadora do podcast quero ser dev</p>
        <p>#50HackersToFollow pela Gama Academy</p>
        <p>LinkedIn Creator</p>
      </div>
    </div>
    <Footer />
  </>
 )
}

export default Sobre 