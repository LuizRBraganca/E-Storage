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
    ProdutoInfoTitleContainer,
    ProdutoInfoTitle,
    BackButton,
    BackIcon,
    InfoMainContainer,
    InputRow,
    AddProdutoInputContainer,
    TitleAddProdutoInput,
    AddProdutoInput,
    DescricaoInput,
    ProdutoAddButton,
    AddProdutoIcon,
    AddButtonContainer,

} from "./styles.js";

export default function AddProduto() {

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
                        to="/produtos">
                            <BackIcon />
                        </BackButton>
                        <ProdutoInfoTitle>
                            Adicionar Produto
                        </ProdutoInfoTitle>

                    </ProdutoInfoTitleContainer>

                    <InfoMainContainer>
                        <InputRow>
                            <AddProdutoInputContainer>
                                <TitleAddProdutoInput>
                                Nome do Item
                                </TitleAddProdutoInput>
                                <AddProdutoInput placeholder="Ex: Leite Ninho" />

                                <TitleAddProdutoInput>
                                Marca
                                </TitleAddProdutoInput>
                                <AddProdutoInput placeholder="Ex: Nestle" />
                            
                                <TitleAddProdutoInput >
                                Peso/Volume
                                </TitleAddProdutoInput>
                                <AddProdutoInput placeholder="Ex: 500g" />
                                <TitleAddProdutoInput>
                                Preço
                                </TitleAddProdutoInput>
                                <AddProdutoInput placeholder="Ex: 20,00" />
                            </AddProdutoInputContainer>

                            <AddProdutoInputContainer>
                                <TitleAddProdutoInput>
                                Descrição
                                </TitleAddProdutoInput>
                                <DescricaoInput placeholder="Ex: Leite Ninho" />

                                <TitleAddProdutoInput>
                                Imagem
                                </TitleAddProdutoInput>
                                <AddProdutoInput />
                            
                            </AddProdutoInputContainer>
                        </InputRow>
                        
                        <AddButtonContainer>
                            <ProdutoAddButton
                                to="/produtos">
                                <AddProdutoIcon />
                            </ProdutoAddButton>
                        </AddButtonContainer>
                    </InfoMainContainer>

                   

                </ProdutoInfoMainContainer>
            </ProdutoInsideContainer>
        </ProdutoMainContainer>

    );
}