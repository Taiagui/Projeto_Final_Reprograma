import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import imagemContato from '../../assets/topoTodos.jpg'

import './contato.styles.css'

const Contato = () => {
 return (
   <>
    <Menu />
    <Header className="topoContato" image={imagemContato}></Header>
    
    <div className="contatoForm">
    <form className="labelForm">
  <label>
    <div>
    <b>Seu nome</b>  (obrigatório)
    </div>
    <input type="text" name="Nome" />
  </label>
  <label>
    <div>
    <b>E-mail</b>  (obrigatório)
    </div>
    <input type="email" name="E-mail" />
  </label>
  <label>
    <b>Assunto</b>
    <input type="text" name="Assunto" />
  </label>
  <label>
    <b>Sua mensagem</b>
    <textarea rows="5">
Escreva aqui sua mensagem
</textarea>
  </label>
  <input type="submit" value="Enviar" />
</form>
    </div>
    <Footer />
  </>
  )}

export default Contato