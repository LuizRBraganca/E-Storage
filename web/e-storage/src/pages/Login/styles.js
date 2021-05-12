import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
 
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
    height: 90vh;
    background-image: linear-gradient(to bottom, #ff5f6d, #ff7a65, #ff9362, #ffac66, #ffc371);
    box-shadow: 4px 5px 9px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5%;
`;
export const TitleLoginContainer = styled.h2`
    font-size: 3.3rem;
    color: #FFF;
`;
export const LoginFormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
export const TitleLoginInput = styled.text`
    font-size: 1.4rem;
    color: #FFF;
    margin: 0.9rem 0 0.3rem 0;
`;
export const LoginInput = styled(Field)`
    text-align: left;
    font-size: 1.1rem;
    width: 25vw;
    height: 7vh;
    outline: none;
    border: none;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.3rem;

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
    font-weight: 600;
    margin: 3rem 0 2rem 0;
    height: 8vh;
    width: 9.5vw;
    color: #ff5f6d;
    background-color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 4px 5px 9px 2px rgba(0, 0, 0, 0.15);
    font-family: 'Comfortaa', cursive;
    outline: none;

    &:hover{
        background: #cccccc;
        transition: 0.2s;
    }
`;
