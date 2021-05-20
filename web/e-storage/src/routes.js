import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Categorias from './pages/Categorias';
import AddCategoria from './pages/AddCategoria';
import Pedidos from './pages/Pedidos';
import Produtos from './pages/Produtos';
import AddProduto from './pages/AddProduto';
import DetalheProduto from './pages/DetalheProduto';
import DetalhamentoPedido from './pages/DetalhamentoPedido';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/categorias" exact component={Categorias}/>
                <Route path="/adicionar_categoria" exact component={AddCategoria}/>
                <Route path="/pedidos" exact component={Pedidos}/>
                <Route path="/produtos" exact component={Produtos}/>
                <Route path="/adicionar_produto" exact component={AddProduto}/>
                <Route path="/detalhe_produto" exact component={DetalheProduto}/>
                <Route path='/detalhamento_pedido' exact component={DetalhamentoPedido}/>
            </Switch>
        </BrowserRouter>
    );
}