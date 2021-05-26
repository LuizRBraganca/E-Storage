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
    EndereçoInfo,
} from "./styles.js";

export default function DetalhamentoPedido() {
    const location = useLocation();
    const history = useHistory();
    const idPedido = "b9c24320-f505-45ab-9c34-cd6d096ad0df";
    const myToken = `Bearer ${localStorage.getItem("token")}`;

    const [pedido, setPedido] = useState([]);

    useEffect(() => {
        api.get(`/pedido/${idPedido}`, {
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setPedido(response.data);
        })
    }, [myToken]);


    const columns1: GridColDef[] = [
        { field: 'col1', headerName: 'Nome do Cliente', width: 200 },
        { field: 'col2', headerName: 'Situação', width: 200 },
        { field: 'col3', headerName: 'Horário Marcado', width: 173 },
        { field: 'col4', headerName: 'Valor Total', width: 150 },
        { field: 'col5', headerName: 'Pagamento', width: 150 },
        { field: 'col6', headerName: 'Troco', width: 150 },
    ];

    const rows1: GridRowsProp = [
        { id: 1, col1: pedido.idCliente , col2: pedido.status , col3: pedido.horarioMarcado, col4: pedido.total, col5: pedido.pagamento, col6: pedido.troco},
    ];

    const columns2: GridColDef[] = [
        { field: 'col1', headerName: 'Nome Produto', width: 370 },
        { field: 'col2', headerName: 'Quantidade', width: 205 },
        { field: 'col3', headerName: 'Preço Unitário', width: 200 },
        { field: 'col4', headerName: 'Valor Total', width: 200 },
        
    ];

    const rows2: GridRowsProp = [
        { id: 1, col1: 'Leite Ninho em Pó - Saco 400g', col2: '2', col3: '20,00', col4: '40,00'},
        { id: 2, col1: 'Queijo Coalho Sadia 6 unidades', col2: '3', col3: '15,97', col4: '47,93'},
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
                            Pedidos - {idPedido}
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
                            <TabelaProduto rows={rows2} columns={columns2} hideFooter autoHeight checkboxSelection={true} />
                        </ListaContainer>
                        
                        <BottomDiv>
                            <EndereçoInfo></EndereçoInfo>
                            <PedidoInfoTitleContainer>
                                    <AssignementIcon
                                    iconColor="#ff5f6d"
                                    size="small" />
                                    <ListaTitle>Alterar Status Pedido</ListaTitle>
                            </PedidoInfoTitleContainer>
                        </BottomDiv>
                        
                    </InfoMainContainer>
                </PedidoInfoMainContainer>
            </PedidoInsideContainer>
        </PedidoMainContainer>
    );
}