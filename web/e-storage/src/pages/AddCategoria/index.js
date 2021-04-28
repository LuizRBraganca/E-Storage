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
    CategoriaInfoTitleContainer,
    CategoriaInfoTitle,
    BackButton,
    BackIcon,
    InfoMainContainer,
    AddCategoriaInputContainer,
    TitleAddCategoriaInput,
    AddCategoriaInput,
    CategoriaAddButton,
    AddCategoriaIcon,
    AddButtonContainer,

} from "./styles.js";

export default function AddCategoria() {

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
                        <BackButton
                        to="/categorias">
                            <BackIcon />
                        </BackButton>
                        <CategoriaInfoTitle>
                            Adicionar Categoria de Produtos
                        </CategoriaInfoTitle>

                    </CategoriaInfoTitleContainer>

                    <InfoMainContainer>
                        <AddCategoriaInputContainer>
                            <TitleAddCategoriaInput>
                            Nome da Categoria
                            </TitleAddCategoriaInput>
                            <AddCategoriaInput />
                            <br/><br/>
                            <TitleAddCategoriaInput>
                                Imagem
                            </TitleAddCategoriaInput>
                            <AddCategoriaInput />
                        </AddCategoriaInputContainer>

                        <AddButtonContainer>
                            <CategoriaAddButton
                                to="/categorias">
                                <AddCategoriaIcon />
                            </CategoriaAddButton>
                        </AddButtonContainer>
                    </InfoMainContainer>

                   

                </CategoriaInfoMainContainer>
            </CategoriaInsideContainer>
        </CategoriaMainContainer>

    );
}