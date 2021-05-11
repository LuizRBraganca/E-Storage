import React from "react";
import { useHistory } from 'react-router-dom'
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
    ProdutoAddButton,
    AddProdutoIcon,
    AddButtonContainer,
    ProdutoContainer,
    ProdutoButton,
    ProdutoIcon,
    ProdutoButtonTitle,
    DeleteContainer,
    DeleteButton,
    DeleteProduto,
} from "./styles.js";

export default function Produtos() {

    const history = useHistory();

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
                        to="/categorias">
                            <BackIcon />
                        </BackButton>
                        <ProdutoInfoTitle>
                            Produtos - Frios
                        </ProdutoInfoTitle>

                    </ProdutoInfoTitleContainer>

                    <InfoMainContainer>
                        <ProdutoContainer>
                            <DeleteContainer>
                                <DeleteButton>
                                    <DeleteProduto
                                        style={{ fontSize: 20 }}
                                    />
                                </DeleteButton>
                            </DeleteContainer>
                            <ProdutoButton to="/detalhe_produto">
                                <ProdutoIcon 
                                    style={{ fontSize: 50 }}
                                />
                                <ProdutoButtonTitle>
                                    Leite Ninho Nestle
                                </ProdutoButtonTitle>
                            </ProdutoButton>
                        </ProdutoContainer>

                        <AddButtonContainer>
                            <ProdutoAddButton
                                to="/adicionar_produto">
                                <AddProdutoIcon />
                            </ProdutoAddButton>
                        </AddButtonContainer>
                    </InfoMainContainer>

                </ProdutoInfoMainContainer>
            </ProdutoInsideContainer>
        </ProdutoMainContainer>
    );
}