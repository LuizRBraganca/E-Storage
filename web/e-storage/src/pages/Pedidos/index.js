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
                        color="white"
                        textColor="#ff5f6d">
                        <HomeIcon />
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
                    </MenuNavigationButton>
                </MenuNavigationContainer>

                <MenuInfoMainContainer>
                    <MenuInfoTitleContainer>
                        <AssignementIcon
                            iconColor="#ff5f6d"
                            size="small" />
                        <MenuInfoTitle>
                            Pedidos
                        </MenuInfoTitle>
                    </MenuInfoTitleContainer>
                    <InfoMainContainer>
                       
                    </InfoMainContainer>
                </MenuInfoMainContainer>
            </MenuInsideContainer>
        </MenuMainContainer>
    );
}