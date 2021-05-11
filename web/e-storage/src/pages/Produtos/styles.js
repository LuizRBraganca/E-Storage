import styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import AddIcon from '@material-ui/icons/Add';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';

export const ProdutoMainContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(to bottom, #ff5f6d, #ff7a65, #ff9362, #ffac66, #ffc371);

`;
export const ProdutoInsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 95vw;
    height: 90vh;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    background-color: #FFF;

`;
export const ProdutoNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 0.1rem solid #cccccc;
    width: 17vw;
    height: 90vh;
`;
export const ProdutoNavigationTitle = styled.p`
    font-size: 2rem;
    color:  #ff5f6d;
`;
export const ProdutoNavigationButton = styled(Link)`
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

export const AddProdutoIcon = styled(AddIcon)`
    color:  #fff;
`;

export const ProdutoIcon = styled(AcUnitRoundedIcon)`
    color:  #ff5f6d;
`;

export const BackIcon = styled(ArrowBackIcon)`
    color:  #ff5f6d;
`;

export const DeleteProduto = styled(DeleteIcon)`
    color:  #707070;
    
`;

export const ProdutoInfoMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.5rem;
    width: 80vw;
`;

export const ProdutoInfoTitleContainer = styled.div`
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
export const ProdutoInfoTitle = styled.p`
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

export const AddButtonContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    align-self: center;
    width: 90%;;
`;
export const ProdutoAddButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    height: 7.5vh;
    width: 4vw;
    background: #ff5f6d;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.2);

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;

export const ProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;   
    margin-left: 2rem;
    height: 20vh;
    width: 12vw;
    background: #f3f2f2;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.1);
`;
export const ProdutoButton = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export const ProdutoButtonTitle = styled.p`
    margin-top: 1rem;
    font-size: 0.7rem;
    color:  #ff5f6d;
`;

export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
`;
export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.2rem;   
    margin-bottom: 0.2rem;
    height: 4vh;
    width: 3vw;
    background: #f3f2f2;
    border: none;
    border-radius: 0.5rem;

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
    
`;