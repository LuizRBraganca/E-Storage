import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import api from '../../services/api';
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
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLoginSubmit() {

        console.log(nome);
        console.log(senha);

        api.post('/authenticate/supermercado', {

            nome,
            senha,

        }).then(function (response) {

            console.log(response.data.user);
            localStorage.setItem("token", response.data.token);
            history.push('/menu');

          }).catch(function (error) {

            console.log(error);
            alert('Email ou senha incorretos');

          });
    }

    

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
                                    name="nome" 
                                    type="text" 
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    />

                                    <TitleLoginInput>
                                        Senha
                                    </TitleLoginInput>
                                    <LoginInput                               
                                    name="senha" 
                                    type="password"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                    />

                                    </LoginInputContainer>
                                <LoginButton type="submit" onClick={handleLoginSubmit}>
                                    Entrar
                                </LoginButton>
                            </LoginFormContainer> 
            </LoginContainer>
        </MainContainer>    
    );
}
