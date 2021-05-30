import api from "../../services/api";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import {
    CategoriaMainContainer,
    CategoriaInsideContainer,
    CategoriaNavigationTitle,
    CategoriaNavigationContainer,
    CategoriaNavigationButton,
    NavigationButtonTitle,
    HomeIcon,
    MenuIcon,
    AssignementIcon,
    CategoriaInfoMainContainer,
    CategoriaInfoTitleContainer,
    CategoriaInfoTitle,
    BackButton,
    BackIcon,
    InfoMainContainer,
    AddCategoriaInputContainer,
    TitleAddCategoriaInput,
    AddCategoriaInput,
    CategoriaAddButton,
    AddCategoriaIcon,
    AddButtonContainer,

} from "./styles.js";

export default function AddCategoria() {
    const [nome, setNome] = useState("");
    const [filename, setFilename] = useState("");
    const [path, setPath] = useState("C:\\Users\\isabe\\E-Storage\\backend\\uploads\\2aaa06feb4272f86.jpg");
    const myToken = `Bearer ${localStorage.getItem("token")}`;
    const history = useHistory();

    async function handleCadastroCategoria(e) {
        e.preventDefault();

        const data = {
            nome,
            filename,
            path,
        };

        api.post('/categoria/cadastro', data, {headers: {Authorization: myToken}}).then(function (response) {

            console.log(response.data.categoria);
            alert(
                "Categoria cadastrada com sucesso"
              );
            history.push('/categorias');

          }).catch(function (error) {

            console.log(myToken);
            console.log({error});
            alert(error.response.data.error);

          });

    }
    

    return (
        <CategoriaMainContainer>
            <CategoriaInsideContainer>
                <CategoriaNavigationContainer>
                    <CategoriaNavigationTitle>EStorage</CategoriaNavigationTitle>
                    <CategoriaNavigationButton
                        to="/menu"
                        color="white"
                        textColor="#ff5f6d">
                        <HomeIcon/>
                        <NavigationButtonTitle>
                            Menu
                        </NavigationButtonTitle>
                    </CategoriaNavigationButton>
                    <CategoriaNavigationButton
                        to="/categorias"
                        color="#ff5f6d"
                        textColor="white"
                        shadow="4px 5px 9px 2px rgba(0, 0, 0, 0.15)">
                        <MenuIcon
                            iconColor="white"
                            size="medium" />
                        <NavigationButtonTitle>
                            Produtos
                        </NavigationButtonTitle>
                    </CategoriaNavigationButton>
                    <CategoriaNavigationButton
                        to="/pedidos"
                        color="white"
                        textColor="#ff5f6d">
                        <AssignementIcon />
                        <NavigationButtonTitle>
                            Pedidos
                        </NavigationButtonTitle>
                    </CategoriaNavigationButton>
                </CategoriaNavigationContainer>

                <CategoriaInfoMainContainer>
                    
                    <CategoriaInfoTitleContainer>
                        <BackButton
                        to="/categorias">
                            <BackIcon />
                        </BackButton>
                        <CategoriaInfoTitle>
                            Adicionar Categoria de Produtos
                        </CategoriaInfoTitle>

                    </CategoriaInfoTitleContainer>

                    <InfoMainContainer onSubmit={handleCadastroCategoria}>
                        <AddCategoriaInputContainer>
                            <TitleAddCategoriaInput>
                            Nome da Categoria
                            </TitleAddCategoriaInput>
                            <AddCategoriaInput 
                                placeholder="Ex: Frutas" 
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            <br/><br/>
                            <TitleAddCategoriaInput>
                                Imagem
                            </TitleAddCategoriaInput>
                            <AddCategoriaInput 
                                type='file'
                                value={filename}
                                onChange={e => setFilename(e.target.value)}
                            />
                        </AddCategoriaInputContainer>

                        <AddButtonContainer>
                            <CategoriaAddButton
                                type="submit">
                                <AddCategoriaIcon />
                            </CategoriaAddButton>
                        </AddButtonContainer>

                    </InfoMainContainer>

                   

                </CategoriaInfoMainContainer>
            </CategoriaInsideContainer>
        </CategoriaMainContainer>

    );
}