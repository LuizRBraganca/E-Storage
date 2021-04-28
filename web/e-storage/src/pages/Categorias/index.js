import React from "react";
import { useHistory } from 'react-router-dom'
import {
    CategoriaMainContainer,
    CategoriaInsideContainer,
    CategoriaNavigationTitle,
    CategoriaNavigationContainer,
    CategoriaNavigationButton,
    NavigationButtonTitle,
    HomeIcon,
    MenuIcon,
    AssignementIcon,
    CategoriaInfoMainContainer,
    InfoMainContainer,
    CategoriaInfoTitleContainer,
    CategoriaInfoTitle,
    CategoriaAddButton,
    AddCategoriaIcon,
    AddButtonContainer,
} from "./styles.js";

export default function Categorias() {

    const history = useHistory();

    return (
        <CategoriaMainContainer>
            <CategoriaInsideContainer>
                <CategoriaNavigationContainer>
                    <CategoriaNavigationTitle>EStorage</CategoriaNavigationTitle>
                    <CategoriaNavigationButton
                        to="/menu"
                        color="white"
                        textColor="#ff5f6d">
                        <HomeIcon/>
                        <NavigationButtonTitle>
                            Menu
                        </NavigationButtonTitle>
                    </CategoriaNavigationButton>
                    <CategoriaNavigationButton
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
                    </CategoriaNavigationButton>
                    <CategoriaNavigationButton
                        to="/pedidos"
                        color="white"
                        textColor="#ff5f6d">
                        <AssignementIcon />
                        <NavigationButtonTitle>
                            Pedidos
                        </NavigationButtonTitle>
                    </CategoriaNavigationButton>
                </CategoriaNavigationContainer>

                <CategoriaInfoMainContainer>
                    
                    <CategoriaInfoTitleContainer>
                        <MenuIcon
                            iconColor="#ff5f6d"
                            size="large" />
                        <CategoriaInfoTitle>
                            Categorias de Produto
                        </CategoriaInfoTitle>

                    </CategoriaInfoTitleContainer>

                    <InfoMainContainer>



                    </InfoMainContainer>

                    <AddButtonContainer>
                        <CategoriaAddButton
                            to="/adicionar_categoria">
                            <AddCategoriaIcon />
                        </CategoriaAddButton>
                    </AddButtonContainer>

                </CategoriaInfoMainContainer>
            </CategoriaInsideContainer>
        </CategoriaMainContainer>
    );
}