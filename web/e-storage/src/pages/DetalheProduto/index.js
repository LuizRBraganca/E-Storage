import api from "../../services/api";
import React, { useState, useEffect} from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { GridRowsProp, GridColDef} from '@material-ui/data-grid';
import {
    ProdutoMainContainer,
    ProdutoInsideContainer,
    ProdutoNavigationTitle,
    ProdutoNavigationContainer,
    ProdutoNavigationButton,
    NavigationButtonTitle,
    HomeIcon,
    MenuIcon,
    AssignementIcon,
    ProdutoInfoMainContainer,
    InfoMainContainer,
    ProdutoInfoTitleContainer,
    ProdutoInfoTitle,
    BackButton,
    BackIcon,
    TabelaProduto,
    TrashIcon,
    DeleteButtonContainer,
    ProdutoDeleteButton,
    DetalheContainer,
    DetalhamentoTitle,
    DetalhamentoInfo,
   
} from "./styles.js";

export default function DetalheProduto() {
    const location = useLocation();
    const myToken = `Bearer ${localStorage.getItem("token")}`;
    const categoriaNome = location.categoriaNome;
    const produtoNome = location.produtoNome;
    const history = useHistory();

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        api.get(`/produto/${categoriaNome}/${produtoNome}`, 
        {    
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setProduto(response.data);


        }).catch(function (error) {

            console.log(error);

          });
    }, [myToken]);

    async function handleDeleteProduto(nome) {
        try {
            await api.delete(`produto/${categoriaNome}`,  {
                data: {
                    nome: nome
                },
                headers: {
                    Authorization: myToken,
                }
            });
            
            history.push({pathname: '/produtos', nome: categoriaNome});
        } catch (err) {
            alert(err);
        }
    };
      
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'ID', width: 100 },
        { field: 'col2', headerName: 'Nome do Item', width: 350 },
        { field: 'col3', headerName: 'Marca', width: 250 },
        { field: 'col4', headerName: 'Peso/Volume', width: 200 },
        { field: 'col5', headerName: 'Preço', width: 123},
    ];

    const rows: GridRowsProp = [
        { id: 1, col1: produto.id, col2: produto.nome, col3: produto.marca, col4: produto.medida, col5: produto.preco },
    ];

    return (
        <ProdutoMainContainer>
            <ProdutoInsideContainer>
                <ProdutoNavigationContainer>
                    <ProdutoNavigationTitle>EStorage</ProdutoNavigationTitle>
                    <ProdutoNavigationButton
                        to="/menu"
                        color="white"
                        textColor="#ff5f6d">
                        <HomeIcon/>
                        <NavigationButtonTitle>
                            Menu
                        </NavigationButtonTitle>
                    </ProdutoNavigationButton>
                    <ProdutoNavigationButton
                        to="/categorias"
                        color="#ff5f6d"
                        textColor="white"
                        shadow="4px 5px 9px 2px rgba(0, 0, 0, 0.15)">
                        <MenuIcon
                            iconColor="white"
                            size="medium" />
                        <NavigationButtonTitle>
                            Produtos
                        </NavigationButtonTitle>
                    </ProdutoNavigationButton>
                    <ProdutoNavigationButton
                        to="/pedidos"
                        color="white"
                        textColor="#ff5f6d">
                        <AssignementIcon />
                        <NavigationButtonTitle>
                            Pedidos
                        </NavigationButtonTitle>
                    </ProdutoNavigationButton>
                </ProdutoNavigationContainer>

                <ProdutoInfoMainContainer>
                    
                    <ProdutoInfoTitleContainer>
                        <BackButton
                        to={{pathname: '/produtos', nome: categoriaNome}}>
                            <BackIcon />
                        </BackButton>
                        <ProdutoInfoTitle>
                            Detalhamento - {produtoNome}
                        </ProdutoInfoTitle>

                    </ProdutoInfoTitleContainer>

                    <InfoMainContainer>
                        <TabelaProduto rows={rows} columns={columns} hideFooter autoHeight  />
                        <DetalheContainer>
                            <DetalhamentoTitle>
                                Descrição:
                            </DetalhamentoTitle>
                            <DetalhamentoInfo>
                                {produto.detalhamento}
                            </DetalhamentoInfo>
                        </DetalheContainer>
                        <DeleteButtonContainer>
                            <ProdutoDeleteButton
                                onClick={() => handleDeleteProduto(produto.nome)}
                            >
                                <TrashIcon/>
                            </ProdutoDeleteButton>
                        </DeleteButtonContainer> 
                    </InfoMainContainer>

                </ProdutoInfoMainContainer>
            </ProdutoInsideContainer>
        </ProdutoMainContainer>
    );
}