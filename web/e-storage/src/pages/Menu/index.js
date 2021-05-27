import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
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
    InfoContainerText,
    GraphView,    
    BarGraphView,
    PizzaGraphView,
    PizzaGraphTitle,
    Graph,
    PizzaIcon,
    BarIcon,
    GraphTitleIcon,
} from "./styles.js";

export default function Menu() {

    const history = useHistory();
    const [options, setOptions] = useState({
        legend: 'none',
        colors: ['#ffc371', '#ff9362', '#ff7a65', '#ff5f6d'],
        pieHole: 0.6,
        pieSliceText: 'none',
        sliceVisibilityThreshold: 0.2,
        legend: { position: 'none' },

    })
    const [dataBar, setDataBar] = useState([
        ['Meses', 'Na semana', 'Entregues', 'Cancelados', 'Pendentes'],
        ['Jan', 0, 0, 0, 0],
        ['Fev', 0, 0, 0, 0],
        ['Mar',120, 109, 1, 5],
        ['Abr', 0, 0, 0, 0],
        ['Maio', 0, 0, 0, 0],
        ['Jun', 0, 0, 0, 0],
        ['Jul', 0, 0, 0, 0],
        ['Ago', 0, 0, 0, 0],
        ['Set', 0, 0, 0, 0],
        ['Out', 0, 0, 0, 0],
        ['Nov', 0, 0, 0, 0],
        ['Dez', 0, 0, 0, 0],
      ])
    const [dataPizza, setDataPizza] = useState([
        ['Tipo', 'Quantidade'],
        ['Na Semana', 120],
        ['Entregues', 109],
        ['Cancelados', 1],
        ['Pendentes', 5],
      ])

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
                        to="/pedidos"
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
                        <GraphView>
                            <BarGraphView>
                                <GraphTitleIcon>
                                        <BarIcon />
                                        <PizzaGraphTitle>
                                            Gráfico Semanal
                                        </PizzaGraphTitle>
                                    </GraphTitleIcon>
                                    <Graph 
                                        width={'55vw'}
                                        height={'40vh'}
                                        chartType="Bar"
                                        data={dataBar}
                                        options={options}
                                        />
                            </BarGraphView>
                            <PizzaGraphView>
                                <GraphTitleIcon>
                                    <PizzaIcon />
                                    <PizzaGraphTitle>
                                        Março
                                    </PizzaGraphTitle>
                                </GraphTitleIcon>
                                    <Graph 
                                        width={'18vw'}
                                        height={'40vh'}
                                        chartType="PieChart"
                                        data={dataPizza}
                                        options={options}
                                    />
                            </PizzaGraphView>
                        </GraphView>
 
                </MenuInfoMainContainer>
            </MenuInsideContainer>
        </MenuMainContainer>
    );
}