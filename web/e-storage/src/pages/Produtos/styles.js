import styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import AddIcon from '@material-ui/icons/Add';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import {Link} from 'react-router-dom';

export const CategoriaMainContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(to bottom, #ff5f6d, #ff7a65, #ff9362, #ffac66, #ffc371);

`;
export const CategoriaInsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 95vw;
    height: 90vh;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    background-color: #FFF;

`;
export const CategoriaNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 0.1rem solid #cccccc;
    width: 17vw;
    height: 90vh;
`;
export const CategoriaNavigationTitle = styled.p`
    font-size: 2rem;
    color:  #ff5f6d;
`;
export const CategoriaNavigationButton = styled(Link)`
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
    color:  ${props => props.iconColor };
    font-size:  ${props => props.size };
    margin-left: 1rem;
`;

export const AssignementIcon = styled(AssignmentRoundedIcon)`
    color:  #ff5f6d;
    margin-left: 1rem;
`;

export const AddCategoriaIcon = styled(AddIcon)`
    color:  #fff;
`;

export const CategoriaIcon = styled(AcUnitRoundedIcon)`
    color:  #ff5f6d;
    font-size:  ${props => props.size };
`;

export const CategoriaInfoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.5rem;
    width: 80vw;
`;

export const CategoriaInfoTitleContainer = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    margin-left: 1rem; 
`;
export const InfoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 80%;
    width: 77vw;
    
`;
export const CategoriaInfoTitle = styled.p`
    font-size: 1.8rem;
    margin-left: 1rem;
    color:  #ff5f6d;
`;
export const AddButtonContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;
export const CategoriaAddButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    height: 7.5vh;
    width: 4vw;
    background: #ff5f6d;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: ${props => props.shadow };

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;

export const CategoriaButton = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;   
    height: 20vh;
    width: 12vw;
    background: #f3f2f2;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: ${props => props.shadow };

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;

export const CategoriaButtonTitle = styled.p`
    font-size: 1.8rem;
    color:  #ff5f6d;
`;