import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Image from '../../assets/Imagem_topo_1.jpg'
import Footer from '../../components/Footer/Footer'
import Logo from '../../assets/marca_topo.png'
import imagemLivro from '../../assets/Tai-livro-embalagem.png'
import variosLivros from '../../assets/2Tai-livro.png'
import meninoLivro from '../../assets/meninoLivro.png'

import './home.styles.css'

const Home = () => {
 return (
   <>
    <Menu />
    <img className="logoImagem" src={Logo} alt='logo'/>
    <Header image={Image}></Header>

    <section className="blocoGrandeCadastro">
    <div className="blocosCadastro">
      <div className="comoFunciona">
      <h2 className="title">Como Funciona?</h2>
      <h3 className="sub-title">Conheça nosso projeto</h3>
      </div >
      <div className="blocoLivro">
      <img className="imgBloco" src={imagemLivro} alt='cadastro'/>
      <h2>Cadastre-se</h2>
      <p>Será feita uma pré-análise para reunir a rede de família que corresponde a fase da criança e suas necessidades.
      </p>
      </div>
      <div className="variosLivros">
      <img className="imgBloco" src={variosLivros} alt='imagemLivros'/>
      <h2>Receba os livros</h2>
      <p>Livros selecionados por especialistas para cada fase de desenvolvimento.
      </p>
      </div>
      <div className="meninoLivro">
        <img className="imgBloco" src={meninoLivro} alt='meninoLivro'/>
        <h2>Incentive o hábito da leitura em casa</h2>
        <p>A partir dos momentos únicos vividos será necessário enviar material, foto ou vídeo, da compreensão do livro recebido.</p>
      </div>
    </div>
    </section>

    <div className="texto">
      <p className="textovisual"> 
      O Projeto “Faz ela ir mais longe” se propõe a incentivar crianças e suas famílias a amar a leitura, desenvolvendo habilidades socioemocionais, imaginação e criatividade, além da reflexão crítica e reconhecimento público sobre  a produção de mulheres escritoras tão importantes para a literatura brasileira.
      </p>
      <p className="textovisual">
      Serão selecionadas 15 famílias, organizadas em 3 grupos de 5 famílias por faixa etária da criança - 3 a 5 anos/ 6 a 8 anos/ 9 a 12 anos, para assim participar do processo de rodízio periódico para entrega dos livros nas residências das famílias cadastradas.
      </p>
      <p className="textovisual">
      A prática da leitura e da contação de histórias como estratégia de fortalecimento de vínculos familiares e coletivos entre criança-família-comunidade e incentivar o ato de ler, escrever, desenhar, pintar, etc, ajuda no processo de síntese do aprendizado e compreensão de mundo através das histórias. Acreditamos que fomentar a leitura é uma prática educativa positiva e emancipadora de sociabilidade entre as crianças, sua família, sua comunidade e com o mundo. 
      </p>
      <p className="textovisual">
      Quantas mulheres escritoras na literatura infantil são lembradas? Quantas estão invisibilizadas? A desigualdade de gênero no mercado em geral e mais especificamente no mercado de livros é alarmante.  Somos muito mais familiarizados com nomes de autores homens do que de mulheres, e isto não é por ausência destas na produção de histórias do mundo infanto-juvenil.  
Se autoras reconhecidas e já consolidadas com seus trabalhos não são lembradas por nossa memória coletiva, é ainda difícil citar os nomes de tantas outras mulheres contadoras de histórias, escritoras independentes em pequenas editoras ou mesmo aquelas que produzem “na raça” do seu próprio bolso os livros e histórias que encantam e transformar a nossa forma de ver o mundo.
      </p>
      <p className="textovisual">
      É por tudo isto que o projeto “Faz ela ir mais longe” acredita que fomentar a leitura é uma prática educativa positiva e emancipadora da sociedade e pretende contribuir diretamente na vida de cada um. Participe e contribua para um mundo melhor!
      </p>
    </div>
    <div className="containerButton">
    <a href="/Cadastro" target="_blank" rel="noreferrer"><button className="botaocadastro">Cadastro</button>
    </a>
    </div>
    <Footer />
  </>
 )
}
export default Home 