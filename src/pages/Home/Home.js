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
    <Header className="imagemHome" image={Image}></Header>

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
    <h1 className="textovisualfinal">
     .......     Projeto Faz ela ir mais longe     .......
      </h1>
      <p className="textovisual"> 
      O Projeto “Faz ela ir mais longe” se propõe a incentivar crianças e suas famílias a nutrir o amor pela leitura, desenvolvendo habilidades socioemocionais, imaginação e criatividade desde cedo nos jovens leitores, além da reflexão crítica e reconhecimento público sobre a produção de mulheres escritoras tão importantes para a literatura brasileira.
      </p>
      <p className="textovisual">
      A importância educativa do ato de ler, a partir do acesso a livros escritos por mulheres brasileiras que produzem conteúdo infanto-juvenil relevantes, poderá ser um elo no fortalecimento de uma rede de famílias interligadas pela leitura.
      </p>
      <p className="textovisual">
      Quantas mulheres escritoras na literatura infantil são lembradas? Quantas ainda seguem invisibilizadas? A desigualdade de gênero no mercado em geral, e mais especificamente no mercado de livros, é alarmante.  Somos muito mais familiarizados com nomes de autores homens do que de mulheres e isto não é por ausência destas na produção de histórias do mundo infanto-juvenil. 
      </p>
      <p className="textovisual">
      Podemos citar algumas destas mulheres amplamente reconhecidas no circuito da literatura  infantil, como a premiada escritora carioca Ana Maria Machado, a paulista Ruth Rocha, Eva Furnari, Clarice Lispector, Angela Lago e outras tantas escritoras extremamente competentes e necessárias. 
      </p>
      <p className="textovisual">
      Se autoras reconhecidas e já consolidadas com seus trabalhos não são lembradas por nossa memória coletiva, é ainda difícil citar os nomes de tantas outras mulheres contadoras de histórias, escritoras independentes em pequenas editoras ou mesmo aquelas que produzem “na raça” do seu próprio bolso os livros e histórias que encantam e transformar a nossa forma de ver o mundo.
      </p>
      <p className="textovisual">
      A prática da leitura e da contação de histórias como estratégia de fortalecimento de vínculos familiares e coletivos entre criança-família-comunidade e incentivar o ato de ler, escrever, desenhar, pintar, etc, ajuda no processo de síntese do aprendizado e compreensão de mundo através das histórias. 
      </p>
      <p className="textovisual">
      Acreditamos que fomentar a leitura é uma prática educativa positiva e emancipadora de sociabilidade entre as crianças, sua família, sua comunidade e o mundo que os certa, além de contribuir diretamente em várias dimensões de aprendizado, no desenvolvimento infantil em todos os estágios, compreendendo que estes livros podem e devem ser acessados com mais facilidade e frequência, já que, infelizmente, contamos com poucas bibliotecas ou nenhuma estrutura parecida nos bairros periféricos e mais vulneráveis da cidade.
      </p>
      <p className="textovisual">
      É por tudo isto que o projeto “Faz ela ir mais longe” acredita que fomentar a leitura é uma prática educativa positiva e emancipadora e pretende contribuir diretamente na vida de cada criança e família, que muitas vezes só precisa de uma oportunidade de acesso e incentivo à leitura.
      </p>
      <h1 className="textovisualfinal">
      Participe e contribua para um mundo melhor!
      </h1>
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