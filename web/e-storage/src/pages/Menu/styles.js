import styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import { Chart } from "react-google-charts";
import {Link} from 'react-router-dom';

export const MenuMainContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(to bottom, #ff5f6d, #ff7a65, #ff9362, #ffac66, #ffc371);

`;
export const MenuInsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 95vw;
    height: 90vh;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    background-color: #FFF;

`;
export const MenuNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 0.1rem solid #cccccc;
    width: 17vw;
    height: 90vh;
`;
export const MenuNavigationTitle = styled.p`
    font-size: 2rem;
    color:  #ff5f6d;
`;
export const MenuNavigationButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;
    height: 8vh;
    width: 12vw;
    background: ${props => props.color };
    color: ${props => props.textColor };
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: ${props => props.shadow };

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;
export const NavigationButtonTitle = styled.p`
    font-size: 1.1rem;
    margin-left: 0.7rem;
`;
export const HomeIcon = styled(HomeRoundedIcon)`
    color:  ${props => props.iconColor };
    font-size:  ${props => props.size };
    margin-left: 1rem;
`;
export const MenuIcon = styled(MenuRoundedIcon)`
    color: #ff5f6d;
    margin-left: 1rem;
`;
export const AssignementIcon = styled(AssignmentRoundedIcon)`
    color:  #ff5f6d;
    margin-left: 1rem;
`;
export const MenuInfoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.5rem;
    width: 80vw;
`;
export const MenuInfoTitleContainer = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    margin-left: 1rem; 
`;
export const MenuInfoTitle = styled.p`
    font-size: 1.8rem;
    margin-left: 1rem;
    color:  #ff5f6d;
`;
export const InfoMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    align-self: center;
    width: 77vw; 
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 16vw;
    height: 14vh;
    background-color: ${props => props.containerColor };
    border-radius: 0.5rem;
    box-shadow: 4px 5px 9px 2px rgba(0, 0, 0, 0.15);
`;
export const InfoContainerText = styled.p`
    font-size: 1.2rem;
    text-align: left;
    color: white;
    margin: 0 1rem 0 0.7rem;
`;
export const GraphView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 1.5rem;
    flex: 1;
`;
export const BarGraphView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const PizzaGraphView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
`;
export const PizzaGraphTitle = styled.h3`
    color: #ff5f6d;
    margin-left: 0.5rem;
`;
export const Graph = styled(Chart)`
`;
export const PizzaIcon = styled(DonutLargeRoundedIcon)`
    color: #ff5f6d;
`;
export const BarIcon = styled(BarChartRoundedIcon)`
    color: #ff5f6d;
`;
export const GraphTitleIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;