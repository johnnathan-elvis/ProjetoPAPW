import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Atendimento from './pages/Atendimento';
import NovoAtendimento from './pages/NovoAtendimento';
import Edicao from './pages/Edicao'


export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Atendimento} />
        <Route path="/novoAtendimento" component={NovoAtendimento} />
        <Route path="/editar/:id" component={Edicao}/>
      </Switch>
    </BrowserRouter>

  );
}