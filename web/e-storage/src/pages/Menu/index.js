import React from "react";
import { useHistory } from 'react-router-dom'
import {
    MenuMainContainer,
    MenuInsideContainer,
    MenuNavigationTitle,
    MenuNavigationContainer,
    MenuNavigationButton,
    NavigationButtonTitle,
    HomeIcon,
    MenuIcon,
    AssignementIcon,
    MenuInfoMainContainer,
    MenuInfoTitleContainer,
    MenuInfoTitle,
    InfoMainContainer,
    InfoContainer,
    InfoContainerText
} from "./styles.js";

export default function Menu() {

    const history = useHistory();

    return (
        <MenuMainContainer>
            <MenuInsideContainer>
                <MenuNavigationContainer>
                    <MenuNavigationTitle>EStorage</MenuNavigationTitle>
                    <MenuNavigationButton
                        to="/menu"
                        color="#ff5f6d"
                        textColor="white"
                        shadow="4px 5px 9px 2px rgba(0, 0, 0, 0.15)">
                        <HomeIcon
                            iconColor="white"
                            size="large" />
                        <NavigationButtonTitle>
                            Menu
                        </NavigationButtonTitle>
                    </MenuNavigationButton>
                    <MenuNavigationButton
                        to="/categorias"
                        color="white"
                        textColor="#ff5f6d">
                        <MenuIcon />
                        <NavigationButtonTitle>
                            Produtos
                        </NavigationButtonTitle>
                    </MenuNavigationButton>
                    <MenuNavigationButton
                        color="white"
                        textColor="#ff5f6d">
                        <AssignementIcon />
                        <NavigationButtonTitle>
                            Pedidos
                        </NavigationButtonTitle>
                    </MenuNavigationButton>
                </MenuNavigationContainer>

                <MenuInfoMainContainer>
                    <MenuInfoTitleContainer>
                        <HomeIcon
                            iconColor="#ff5f6d"
                            size="small" />
                        <MenuInfoTitle>
                            Quantidade de Pedidos
                        </MenuInfoTitle>
                    </MenuInfoTitleContainer>
                    <InfoMainContainer>
                        <InfoContainer
                        containerColor="#ffc371">
                            <InfoContainerText>
                                120
                            </InfoContainerText>
                            <InfoContainerText>
                                Na semana
                            </InfoContainerText>
                        </InfoContainer>
                        <InfoContainer 
                        containerColor="#ff9362">
                            <InfoContainerText>
                                109
                            </InfoContainerText>
                            <InfoContainerText>
                                Entregues
                            </InfoContainerText>
                        </InfoContainer>
                        <InfoContainer
                        containerColor="#ff7a65">
                            <InfoContainerText>
                                1
                            </InfoContainerText>
                            <InfoContainerText>
                                Cancelados
                            </InfoContainerText>
                        </InfoContainer>
                        <InfoContainer
                        containerColor="#ff5f6d">
                            <InfoContainerText>
                                5
                            </InfoContainerText>
                            <InfoContainerText>
                                Pedentes
                            </InfoContainerText>
                        </InfoContainer>
                    </InfoMainContainer>
                </MenuInfoMainContainer>
            </MenuInsideContainer>
        </MenuMainContainer>
    );
}