import api from "../../services/api";
import React, { useState, useEffect } from "react";
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
    InfoMainContainer,
    CategoriaInfoTitleContainer,
    CategoriaInfoTitle,
    CategoriaAddButton,
    AddCategoriaIcon,
    AddButtonContainer,
    CategoriasContainer,
    Categoria,
    CategoriaButton,
    CategoriaIcon,
    CategoriaButtonTitle,
    DeleteContainer,
    DeleteButton,
    DeleteCategoria,
} from "./styles.js";

export default function Categorias() {
    const [categoria, setCategoria] = useState([]);
    const myToken = `Bearer ${localStorage.getItem("token")}`;


    const history = useHistory();

    async function handleDeleteCategoria(nome) {
        try {
            await api.delete(`categoria/${nome}`, {
                headers: {
                    Authorization: myToken,
                }
            });

            setCategoria(categoria.filter(categoria => categoria.nome !== nome));
        } catch (err) {
            alert(err);
        }
    }

    function handleCategoriaProduto(nome) {
        history.push({pathname: '/produtos', nome: nome});
    }

    useEffect(() => {
        api.get('/categoria/lista', {
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setCategoria(response.data);
        })
    }, [myToken]);

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
                        <MenuIcon
                            iconColor="#ff5f6d"
                            size="large" />
                        <CategoriaInfoTitle>
                            Categorias de Produto
                        </CategoriaInfoTitle>

                    </CategoriaInfoTitleContainer>

                    <InfoMainContainer>

                        <CategoriasContainer>
                            
                            {categoria.map(categoria => (
                                <Categoria key={categoria.nome}>
                                    <DeleteContainer>
                                        <DeleteButton>
                                            <DeleteCategoria
                                                onClick={() => handleDeleteCategoria(categoria.nome)}
                                                style={{ fontSize: 20 }}
                                            />
                                        </DeleteButton>
                                    </DeleteContainer>

                                    <CategoriaButton 
                                        onClick={() => handleCategoriaProduto(categoria.nome)}
                                    >
                                        <CategoriaIcon 
                                            style={{ fontSize: 50 }}
                                        />
                                        <CategoriaButtonTitle>
                                            {categoria.nome}
                                        </CategoriaButtonTitle>
                                    </CategoriaButton>
                                </Categoria>
                            ))}
                                
                        </CategoriasContainer>
                        

                        <AddButtonContainer>
                            <CategoriaAddButton
                                to="/adicionar_categoria">
                                <AddCategoriaIcon />
                            </CategoriaAddButton>
                        </AddButtonContainer>
                    </InfoMainContainer>

                </CategoriaInfoMainContainer>
            </CategoriaInsideContainer>
        </CategoriaMainContainer>
    );
}