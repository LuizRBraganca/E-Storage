import React from "react";
import { useHistory } from 'react-router-dom';
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
    BuscaIcon,
    AssignementIcon,
    PedidoInfoMainContainer,
    PedidoInfoTitleContainer,
    PedidoInfoTitle,
    InfoMainContainer,
    DetalhamentoInfo,
    DetalhamentoTitle,
    DetalheContainer,
    TabelaProduto,
    DetalhamentoButton,
} from "./styles.js";

export default function Pedidos() {

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Nome do Cliente', width: 230 },
        { field: 'col2', headerName: 'Situação', width: 170 },
        { field: 'col3', headerName: 'Tipo de Entrega', width: 180 },
        { field: 'col4', headerName: 'Horário Marcado', width: 170 },
        { field: 'col5', headerName: 'Valor Total', width: 130 },
        { field: " ",
            headerName: "Detalhamento",
            sortable: false,
            width: 143,
            /* disableClickEventBubbling: true, */
            renderCell: (params) => {
    
        
            return <DetalhamentoButton to='/detalhamento_pedido'>
                <BuscaIcon/>
            </DetalhamentoButton>;
            }
        },
    ];

    const rows: GridRowsProp = [
        { id: 1, col1: 'Caroline Bol', col2: 'concluído', col3: 'Delivery', col4: 'Imediatamente', col5: '87,93'},
        { id: 2, col1: 'Luiz Ricardo', col2: 'recebido', col3: 'Busca - Doca', col4: '14:00', col5: '20,50'},
        { id: 3, col1: 'David Cabral', col2: 'em andamento', col3: 'Delivery', col4: 'Imediatamente', col5: '57,71'},
        { id: 4, col1: 'Danilo Castro', col2: 'em andamento', col3: 'Busca - Gentil', col4: '17:00', col5: '204,60'},
    ];

    const history = useHistory();

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
                        <AssignementIcon
                            iconColor="#ff5f6d"
                            size="small" />
                        <PedidoInfoTitle>
                            Pedidos
                        </PedidoInfoTitle>
                    </PedidoInfoTitleContainer>
                    <InfoMainContainer>
                        <TabelaProduto rows={rows} columns={columns} hideFooter autoHeight  />
                        {/* <DetalhamentoButton to='/detalhamento_pedido'></DetalhamentoButton> */}
                    </InfoMainContainer>
                </PedidoInfoMainContainer>
            </PedidoInsideContainer>
        </PedidoMainContainer>
    );
}