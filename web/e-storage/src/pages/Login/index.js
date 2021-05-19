import React from "react";
import {useHistory} from "react-router-dom"
import Api from '../../services/api';
import {
    MainContainer, 
    LoginContainer,
    TitleLoginContainer,
    LoginFormContainer,
    LoginInputContainer,
    TitleLoginInput,
    LoginInput,
    LoginButton,

} from "./styles.js";

export default function Login() {

    const history = useHistory();

    return(
        <MainContainer>
            <LoginContainer>
                <TitleLoginContainer>
                    EStorage
                </TitleLoginContainer>
            
                            <LoginFormContainer>
                                <LoginInputContainer>
                                    <TitleLoginInput>
                                        Usuário
                                    </TitleLoginInput>
                                    <LoginInput                                                                     
                                    name="username" 
                                    type="text" />

                                    <TitleLoginInput>
                                        Senha
                                    </TitleLoginInput>
                                    <LoginInput                               
                                    name="password" 
                                    type="password"/>

                                    </LoginInputContainer>
                                <LoginButton type="submit">
                                    Entrar
                                </LoginButton>
                            </LoginFormContainer> 
            </LoginContainer>
        </MainContainer>    
    );
}
