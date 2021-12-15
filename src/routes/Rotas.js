import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import ContacaoDeHistorias from '../pages/ContacaoDeHistorias/ContacaoDeHistorias'
import NossasAutoras from '../pages/NossasAutoras/NossasAutoras'
import Contato from '../pages/Contato/Contato'
import Cadastro from '../pages/Cadastro/Cadastro'



function Rotas(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>                
        <Route path="/cadastro" component={Cadastro}/> 
        <Route path="/contacaoDeHistorias" component={ContacaoDeHistorias}/> 
        <Route path="/nossasAutoras"component={NossasAutoras}/>  
        <Route path="/contato" component={Contato}/>
            
      </Switch>  
    </BrowserRouter>
  )
}
export default Rotas