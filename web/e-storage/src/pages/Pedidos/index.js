import api from "../../services/api";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import {
  DataGrid,
  GridColDef,
  GridApi,
  GridCellValue
} from "@material-ui/data-grid";
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
    const [pedido, setPedido] = useState([]);
    const myToken = `Bearer ${localStorage.getItem("token")}`;


    const history = useHistory();

    useEffect(() => {
        api.get('/pedido/lista', {
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setPedido(response.data);
        })
    }, [myToken]);

    

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Nome do Cliente', width: 230 },
        { field: 'col2', headerName: 'Situação', width: 170 },
        { field: 'col3', headerName: 'Horário Marcado', width: 170 },
        { field: 'col4', headerName: 'Pagamento', width: 180 },
        { field: 'col5', headerName: 'Valor Total', width: 130 },
        { field: " ",
            headerName: "Detalhamento",
            sortable: false,
            width: 143,
            renderCell: (params) => {
                const onClick = () => {
                    const api: GridApi = params.api;
                    const fields = api
                      .getAllColumns()
                      .map((c) => c.field)
                      .filter((c) => c !== "__check__" && !!c);
                    const thisRow: Record<string, GridCellValue> = {};
            
                    fields.forEach((f) => {
                      thisRow[f] = params.getValue(f);
                    });
            
                    const id = thisRow.id;

                    history.push({pathname: '/detalhamento_pedido', idPedido: id});
                  };
            
                  return <DetalhamentoButton onClick={onClick}>
                      <BuscaIcon></BuscaIcon>
                  </DetalhamentoButton>;
            }
        },
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
                        <AssignementIcon
                            iconColor="#ff5f6d"
                            size="small" />
                        <PedidoInfoTitle>
                            Pedidos 
                        </PedidoInfoTitle>
                    </PedidoInfoTitleContainer>
                    <InfoMainContainer>
                        <TabelaProduto rows={
                            pedido.map(pedido => (
                                { id: pedido.id, col1: pedido.idCliente , col2: pedido.status , col3: pedido.horarioMarcado , col4: pedido.pagamento , col5: pedido.total }
                            ))
                        } columns={columns} hideFooter autoHeight  />
                        
                    </InfoMainContainer>
                </PedidoInfoMainContainer>
            </PedidoInsideContainer>
        </PedidoMainContainer>
    );
}