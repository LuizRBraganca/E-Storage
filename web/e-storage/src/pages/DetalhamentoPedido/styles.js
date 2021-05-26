import styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { DataGrid } from '@material-ui/data-grid';

import {Link} from 'react-router-dom';

export const PedidoMainContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(to bottom, #ff5f6d, #ff7a65, #ff9362, #ffac66, #ffc371);

`;
export const PedidoInsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 95vw;
    height: 90vh;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    background-color: #FFF;

`;
export const PedidoNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 0.1rem solid #cccccc;
    width: 17vw;
    height: 90vh;
`;
export const PedidoNavigationTitle = styled.p`
    font-size: 2rem;
    color:  #ff5f6d;
`;
export const PedidoNavigationButton = styled(Link)`
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
    color:  #ff5f6d;
    margin-left: 1rem;
`;
export const MenuIcon = styled(MenuRoundedIcon)`
    color: #ff5f6d;
    margin-left: 1rem;
`;
export const AssignementIcon = styled(AssignmentRoundedIcon)`
    color:  ${props => props.iconColor };
    font-size:  ${props => props.size };
    margin-left: 1rem;
`;
export const BackIcon = styled(ArrowBackIcon)`
    color:  #ff5f6d;
`;
export const PedidoInfoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.5rem;
    width: 80vw;
`;
export const PedidoInfoTitleContainer = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    margin-left: 1rem; 
`;
export const PedidoInfoTitle = styled.p`
    font-size: 1.8rem;
    margin-left: 1rem;
    color:  #ff5f6d;
`;

export const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    width: 4vw;
    border: 1px solid #ff5f6d;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: ${props => props.shadow };

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;

export const InfoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 80%;
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

export const ListaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: space-around; */
    width: 77vw;
`;

export const ListaTitle = styled.p`
    font-size: 1.2rem;
    margin-left: 1rem;
    color:  #ff5f6d;
`;


export const TabelaProduto = styled(DataGrid)`
    display: flex;
    width: 75vw;
    max-height: 23.5%;
    margin: 1rem;
    & .MuiDataGrid-colCell{
        color: #ff5f6d;
    };
    & .MuiDataGrid-cell{
        background: #FEEFE2;
    };
`;

export const BottomDiv = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between; 
    margin-left: 1rem;
    width: 25vw;
`;

export const EndereçoContainer = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: flex-start;
    /* justify-content: center; */
`;

export const EndereçoInfo = styled.p`
    font-size: 1rem;
    margin-left: 1rem;

`;

export const StatusButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    width: 10vw;
    background: #ff5f6d;
    color: #fff;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.2);
    box-shadow: ${props => props.shadow };
    cursor: pointer;
    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;