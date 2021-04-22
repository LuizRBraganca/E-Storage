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
    MenuInfoContainer,
    MenuInfoTitleContainer,
    MenuInfoTitle,
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
                            size="medium" />
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

                <MenuInfoContainer>

                    <MenuInfoTitleContainer>
                        <HomeIcon
                            iconColor="#ff5f6d"
                            size="large" />
                        <MenuInfoTitle>
                            Quantidade de Pedidos
                        </MenuInfoTitle>
                    </MenuInfoTitleContainer>

                </MenuInfoContainer>
            </MenuInsideContainer>
        </MenuMainContainer>
    );
}