import React from 'react';
import ReactDOM from 'react-dom';
import T404 from '../src/assets/img/T404.jpg';
//import dadosIniciais from '../../data/dados_iniciais.json';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>404</div>);

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <img className="Logo" src={T404} alt="AluraFlix 404" />
      <Route component={Pagina404} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root'),
);
