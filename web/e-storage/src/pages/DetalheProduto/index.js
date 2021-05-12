import React from "react";
import { useHistory } from 'react-router-dom'
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

    const history = useHistory();

      
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'ID', width: 100 },
        { field: 'col2', headerName: 'Nome do Item', width: 350 },
        { field: 'col3', headerName: 'Marca', width: 250 },
        { field: 'col4', headerName: 'Peso/Volume', width: 200 },
        { field: 'col5', headerName: 'Preço', width: 123},
    ];

    const rows: GridRowsProp = [
        { id: 1, col1: '1', col2: 'Leite Ninho', col3: 'Nestle', col4: '500g', col5: '20,00' },
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
                        to="/produtos">
                            <BackIcon />
                        </BackButton>
                        <ProdutoInfoTitle>
                            Produtos - Detalhamento
                        </ProdutoInfoTitle>

                    </ProdutoInfoTitleContainer>

                    <InfoMainContainer>
                        <TabelaProduto rows={rows} columns={columns} hideFooter autoHeight  />
                        <DetalheContainer>
                            <DetalhamentoTitle>
                                Descrição:
                            </DetalhamentoTitle>
                            <DetalhamentoInfo>
                                Lata de leite ninho
                            </DetalhamentoInfo>
                        </DetalheContainer>
                        <DeleteButtonContainer>
                            <ProdutoDeleteButton>
                                <TrashIcon/>
                            </ProdutoDeleteButton>
                        </DeleteButtonContainer> 
                    </InfoMainContainer>

                </ProdutoInfoMainContainer>
            </ProdutoInsideContainer>
        </ProdutoMainContainer>
    );
}