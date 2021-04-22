import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    max-width: 40vw;
    height: 85vh;
    background-image: linear-gradient(to bottom, #ff5f6d, #ff7a65, #ff9362, #ffac66, #ffc371);
    box-shadow: 4px 5px 9px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5%;
`;
export const TitleLoginContainer = styled.h2`
    font-size: 3rem;
    color: #FFF;
`;
export const LoginInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
`;
export const TitleLoginInput = styled.text`
    font-size: 1.3rem;
    color: #FFF;
    margin: 1rem 0 0.3rem 0;
`;
export const LoginInput = styled.input`
    text-align: left;
    font-size: 1rem;
    width: 23vw;
    height: 7.5vh;
    outline: none;
    border: none;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }

`;
export const LoginButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin: 2rem;
    height: 7.5vh;
    width: 9vw;
    color: #ff5f6d;
    background-color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: 4px 5px 9px 2px rgba(0, 0, 0, 0.15);

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;
