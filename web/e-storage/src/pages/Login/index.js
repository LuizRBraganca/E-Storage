import React from "react";
import {
    MainContainer, 
    LoginContainer,
    TitleLoginContainer,
    LoginInputContainer,
    TitleLoginInput,
    LoginInput,
    LoginButton,

} from "./styles.js";


export default function Login() {
    return(
        <MainContainer>
            <LoginContainer>
                <TitleLoginContainer>
                    EStorage
                </TitleLoginContainer>
                <LoginInputContainer>
                    <TitleLoginInput>
                        Usuário
                    </TitleLoginInput>
                    <LoginInput />
                    <TitleLoginInput>
                        Senha
                    </TitleLoginInput>
                    <LoginInput />
                </LoginInputContainer>
                <LoginButton to='/menu'>
                         Entrar
                </LoginButton>
            </LoginContainer>
        </MainContainer>    
    );
}
