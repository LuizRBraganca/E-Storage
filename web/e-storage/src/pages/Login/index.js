import React, {useState, useEffect} from "react";
import {Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

    const [nav, setNav] = useState("");
    const [valid, setValid] = useState();
    const validate = Yup.object({
        username: Yup.string().required('Nome de usuário obrigatório'),
        password: Yup.string().min(5,'Senha muito curta, mínimo 5 letras').required('Senha obrigatória')
    });

    useEffect(() => {
        setValid(false);
    })

    function handleNavigation(validate) {
        if(validate == true){ 
          setValid(false);
          setNav("/menu");
         
          console.log("clicou");
        } else {

        }
    }   

    return(
        <MainContainer>
            <LoginContainer>
                <TitleLoginContainer>
                    EStorage
                </TitleLoginContainer>
                    <Formik        
                    initialValues={{
                    username: '',
                    password: '',
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                            console.log(values)
                    }}                        
                    render={({ isValid }) => (
                            <LoginFormContainer>
                                <LoginInputContainer>
                                    <TitleLoginInput>
                                        Usuário
                                    </TitleLoginInput>
                                    <LoginInput                                                                     
                                    name="username" 
                                    type="text" />
                                    <ErrorMessage name="username"/>
                                    <TitleLoginInput>
                                        Senha
                                    </TitleLoginInput>
                                    <LoginInput                               
                                    name="password" 
                                    type="password"/>
                                    <ErrorMessage name="password"/>
                                    </LoginInputContainer>
                                <LoginButton type="submit" disabled={valid} onClick={() => handleNavigation(isValid)} to={nav}>
                                    Entrar
                                </LoginButton>
                            </LoginFormContainer> 
                            
                            )}/>

            </LoginContainer>
        </MainContainer>    
    );
}
