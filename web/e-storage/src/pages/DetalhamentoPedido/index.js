import api from "../../services/api";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { GridRowsProp, GridColDef} from '@material-ui/data-grid';
import {
    PedidoMainContainer,
    PedidoInsideContainer,
    PedidoNavigationTitle,
    PedidoNavigationContainer,
    PedidoNavigationButton,
    NavigationButtonTitle,
    HomeIcon,
    MenuIcon,
    AssignementIcon,
    BackIcon,
    PedidoInfoMainContainer,
    PedidoInfoTitleContainer,
    PedidoInfoTitle,
    BackButton,
    InfoMainContainer,
    ListaTitle,
    ListaContainer,
    TabelaProduto,
    BottomDiv,
    EndereçoContainer,
    EndereçoInfo,
    StatusButton,
} from "./styles.js";

export default function DetalhamentoPedido() {
    const location = useLocation();
    const history = useHistory();
    const idPedido = "812c99c9-9745-443f-939e-1ab71979dfc4";
    const myToken = `Bearer ${localStorage.getItem("token")}`;

    const [status, setStatus] = useState("");
    const [pedido, setPedido] = useState([]);
    const [produtoPedido, setProdutoPedido] = useState([]);

    useEffect(() => {
        const myToken = `Bearer ${localStorage.getItem("token")}`;
        api.get(`/pedido/${idPedido}`, {
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setPedido(response.data);
        })

        api.get(`/pedido/lista/${idPedido}`, {
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setProdutoPedido(response.data);
        })

       
    }, []);


    function handleMudarStatus(status) {
        
        api.patch(`/pedido/${idPedido}/${status}`,
        {
            headers: {Authorization: myToken}}).then(function (response) {

           alert(
               "Status alterado com sucesso"
             );
             history.push({pathname: '/detalhamento_pedido', idPedido: idPedido});

         }).catch(function (error) {

           alert(error.response.data.error);

         });
    }

    const columns1: GridColDef[] = [
        { field: 'col1', headerName: 'Nome do Cliente', width: 200 },
        { field: 'col2', headerName: 'Situação', width: 200 },
        { field: 'col3', headerName: 'Horário Marcado', width: 173 },
        { field: 'col4', headerName: 'Valor Total', width: 150 },
        { field: 'col5', headerName: 'Pagamento', width: 150 },
        { field: 'col6', headerName: 'Troco', width: 150 },
    ];

    const rows1: GridRowsProp = [
        { id: 1, col1: pedido.nomeCliente , col2: pedido.status , col3: pedido.horarioMarcado, col4: pedido.total, col5: pedido.pagamento, col6: pedido.troco},
    ];

    const columns2: GridColDef[] = [
        { field: 'col1', headerName: 'Nome Produto', width: 370 },
        { field: 'col2', headerName: 'Quantidade', width: 205 },
        { field: 'col3', headerName: 'Preço Unitário', width: 200 },
        { field: 'col4', headerName: 'Valor Total', width: 200 },
        
    ];

  


    return (
        <PedidoMainContainer>
            <PedidoInsideContainer>
                <PedidoNavigationContainer>
                    <PedidoNavigationTitle>EStorage</PedidoNavigationTitle>
                    <PedidoNavigationButton
                        to="/menu"
                        color="white"
                        textColor="#ff5f6d">
                        <HomeIcon />
                        <NavigationButtonTitle>
                            Menu
                        </NavigationButtonTitle>
                    </PedidoNavigationButton>
                    <PedidoNavigationButton
                        to="/categorias"
                        color="white"
                        textColor="#ff5f6d">
                        <MenuIcon />
                        <NavigationButtonTitle>
                            Produtos
                        </NavigationButtonTitle>
                    </PedidoNavigationButton>
                    <PedidoNavigationButton
                        to="/pedidos"
                        color="#ff5f6d"
                        textColor="white"
                        shadow="4px 5px 9px 2px rgba(0, 0, 0, 0.15)">
                        <AssignementIcon
                            iconColor="white"
                            size="large" />
                        <NavigationButtonTitle>
                            Pedidos
                        </NavigationButtonTitle>
                    </PedidoNavigationButton>
                </PedidoNavigationContainer>

                <PedidoInfoMainContainer>
                    <PedidoInfoTitleContainer>
                        <BackButton
                        to="/pedidos">
                            <BackIcon />
                        </BackButton>
                        <PedidoInfoTitle>
                            Pedidos - Detalhamento

                        </PedidoInfoTitle>
                    </PedidoInfoTitleContainer>
                    <InfoMainContainer>
                        <TabelaProduto rows={rows1} columns={columns1} hideFooter autoHeight  />
                        <ListaContainer>
                            <PedidoInfoTitleContainer>
                                <AssignementIcon
                                iconColor="#ff5f6d"
                                size="small" />
                                <ListaTitle>Lista de Compras</ListaTitle>
                            </PedidoInfoTitleContainer>
                            <TabelaProduto rows={
                                produtoPedido.map(produtoPedido => (
                                    { id: produtoPedido.id, col1: produtoPedido.nomeProduto+" Sadia 200g", col2: produtoPedido.quantidade, col3: produtoPedido.preco, col4: produtoPedido.totalParcial}
                                ))
                            } columns={columns2} hideFooter autoHeight checkboxSelection={true} />
                        </ListaContainer>
                        
                        <BottomDiv>
                           
                            <StatusButton id="Cancelado" onClick={handleMudarStatus("Cancelado")}>Cancelar Pedido</StatusButton>
                            <StatusButton id="Concluído" onClick={handleMudarStatus("Concluído")}>Concluir Pedido</StatusButton>
                        </BottomDiv>
                        
                    </InfoMainContainer>
                </PedidoInfoMainContainer>
            </PedidoInsideContainer>
        </PedidoMainContainer>
    );
}