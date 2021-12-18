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
      <h1 className="textovisualfinal">
     .......     Como Participar?     .......
      </h1>
      <p className="textovisual">
      Poderão participar famílias que possuam no seu núcleo crianças de até 12 anos de idade e que possuam uma renda familiar de até 3 salários mínimos, além de residir em bairros periféricos e/ou distantes do centro da cidade.
      </p>
      <p className="textovisual">
      Selecionaremos 15 famílias, organizadas em 3 grupos distribuídos por faixa etária da criança - 3 a 5 anos/ 6 a 8 anos/ 9 a 12 anos. Realizaremos um processo de rodízio periódico dos livros para assim definir os roteiros e horários para entrega destes nas residências das famílias cadastradas.
      </p>
      <p className="textovisual">
      O projeto será divulgado em escolas públicas, comunidades populares e redes sociais próprias e/ou de parceiros. As famílias poderão realizar o cadastro no link disponibilizado pelo formulário de inscrição do Google Form. A previsão de duração do projeto com o primeiro grupo de famílias cadastrado será de três meses, sendo reaberto o processo seletivo para cadastro de novas famílias nos rodízios posteriores.
      </p>
      
      <p className="textovisual">
      Na aba (Contação de Histórias) destinada aos depoimentos das crianças e famílias, vídeos de contação de histórias e produções artísticas em artes visuais como produto síntese de cada livro lido e discutido, será divulgado para conhecimento do projeto. O material, além de ficar disponível no site, também será amplamente divulgado nas redes sociais do projeto.
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