import styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
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
export const BackIcon = styled(ArrowBackIcon)`
    color:  #ff5f6d;
`;
export const AddProdutoIcon = styled(CheckIcon)`
    color:  #fff;
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

export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 60vw;
`;

export const AddProdutoInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 1rem;
`;

export const InfoMainContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 80%;
    width: 77vw;
`;
export const TitleAddProdutoInput = styled.text`
    font-size: 1.2rem;
    color: #707070;
    margin: 2rem 0 0.3rem 0;
    margin-left: 1rem;
`;
export const AddProdutoInput = styled.input`
    text-align: left;
    font-size: 1rem;
    margin-left: 1rem;
    color: #707070;
    width: 25vw;
    height: 6.5vh;
    padding-left: 0.5rem;
    outline: none;
    border: none;
    background-color: #F3F2F2;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;

export const DescricaoInput = styled.textarea`
    text-align: left;
    font-size: 1rem;
    margin-left: 1rem;
    color: #707070;
    width: 25vw;
    height: 21.5vh;
    padding-left: 0.5rem;
    outline: none;
    border: none;
    background-color: #F3F2F2;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
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
    width: 90%;
`;
export const ProdutoAddButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.5vh;
    width: 4vw;
    background: #ff5f6d;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.2);
    box-shadow: ${props => props.shadow };

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;