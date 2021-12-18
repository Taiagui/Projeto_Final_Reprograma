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
      Quantas escritoras na literatura infantil são lembradas? Por que estas autoras seguem invisibilizadas? A desigualdade entre homens e mulheres nesse campo é gritante. Somos muito mais familiarizados com escritores do que com escritoras.
      </p>
      <p className="textovisual">
      O Projeto “Faz ela ir mais longe” objetiva construir um ambiente propício à leitura especialmente entre a família através de obras de escritoras brasileiras.
      </p>
      <p className="textovisual">
      O estímulo à leitura através de obras infanto-juvenis escritas por mulheres brasileiras, poderá para além de fomentar a leitura, proporcionar uma rede de empoderamento feminino entre as famílias.  
      </p>
      <p className="textovisual">
      Temos que ressaltar escritoras como Ana Maria Machado, Ruth Rocha, Eva Furnari, Clarice Lispector, Angela Lago e outras tantas escritoras extremamente necessárias. 
      </p>
      <p className="textovisual">
      A prática da leitura e da contação de histórias como estratégia de fortalecimento de vínculos familiares e coletivos entre criança-família-comunidade ajuda no processo de síntese do aprendizado e compreensão de mundo através das histórias.
      </p>
      <p className="textovisual">
      Acreditamos que o fomento à leitura é uma prática educativa emancipadora contribuindo diretamente em várias dimensões de aprendizado, compreendendo que estes livros podem e devem ser acessados com mais facilidade e frequência, já que, infelizmente, contamos com poucas bibliotecas ou nenhuma estrutura parecida nos bairros periféricos e mais vulneráveis da cidade. 
      </p>
      <p className="textovisual">
      Dessa forma o projeto “Faz ela ir mais longe” impulsionará a leitura contribuindo diretamente com o desenvolvimento social de crianças e famílias além de diminuir a desigualdade de gênero que marca o mercado de livros infantis.
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