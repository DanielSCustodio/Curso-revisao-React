import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import NotFound from './pages/NotFound';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/sobre" component={Sobre}/>
        <Route  exact path="/contato" component={Contato}/>
        <Route  exact path="/produto/:slug" component={Produto}/>
        <Route  path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;