import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Do mais específico para o mais geral */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>Problema</div>)} />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>,
  document.getElementById('root'),
);
