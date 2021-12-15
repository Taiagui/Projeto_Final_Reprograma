import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageAbout from '../../assets/about.png'
import Footer from '../../components/Footer/Footer'


import './cadastro.styles.css'

const Cadastro = () => {
 return (
   <>
    <Menu />
    <Header className="imgHeader" image={ImageAbout}></Header>
    <div className='main'>
      <div className="texto">
      <p>
      Poderão participar famílias com crianças de até 12 anos de idade, que tenham uma renda familiar de até 3 salários mínimos e residam em bairros periféricos e/ou distantes do centro da cidade.
      </p>
      <p>
      Serão selecionadas 15 famílias, inicialmente organizadas em 3 grupos de 5 famílias por faixa etária da criança - 3 a 5 anos/ 6 a 8 anos/ 9 a 12 anos, sendo posteriormente realizada a definição dos nomes das famílias no processo de rodízio periódico dos livros, selecionados por temas, nas residências das famílias cadastradas.
Teremos no site do projeto, uma aba destinada para arrecadação de novos livros e apoio financeiro de pessoa física e pessoa jurídica, além de doações de livros 
infantis. 
      </p>
      </div>
    <div className="containerButton">
    <a href="https://docs.google.com/forms/d/1CiI1BMcumgtFd2uu7yeZswvmzf-ZRr6jDYmBOQI5-Wk/edit?usp=drive_web" target="_blank" rel="noreferrer"><button className="botaocadastro">Cadastre-se aqui!</button>
    </a>
    </div>
    </div>
    <Footer />
  </>
 )
}

export default Cadastro 