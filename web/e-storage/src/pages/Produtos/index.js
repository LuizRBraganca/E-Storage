import api from "../../services/api";
import React, { useState, useEffect} from "react";
import { useLocation, useHistory } from 'react-router-dom'
import {
    ProdutoMainContainer,
    ProdutoInsideContainer,
    ProdutoNavigationTitle,
    ProdutoNavigationContainer,
    ProdutoNavigationButton,
    NavigationButtonTitle,
    HomeIcon,
    MenuIcon,
    AssignementIcon,
    ProdutoInfoMainContainer,
    InfoMainContainer,
    ProdutoInfoTitleContainer,
    ProdutoInfoTitle,
    BackButton,
    BackIcon,
    ProdutoAddButton,
    AddProdutoIcon,
    AddButtonContainer,
    ProdutoContainer,
    Produto,
    ProdutoButton,
    ProdutoIcon,
    ProdutoButtonTitle,
    DeleteContainer,
    DeleteButton,
    DeleteProduto,
} from "./styles.js";

export default function Produtos() {
    const location = useLocation();
    const history = useHistory();
    const categoriaNome = location.nome;
    const myToken = `Bearer ${localStorage.getItem("token")}`;

    const [produto, setProduto] = useState([]);

    async function handleDeleteProduto(nome) {
        try {
            await api.delete(`produto/${categoriaNome}/${nome}`,  {
                headers: {
                    Authorization: myToken,
                }
            });

            setProduto(produto.filter(produto => produto.nome !== nome));
        } catch (err) {
            alert(err.response.data.error);
        }
    }

    function handleProdutoDetalhamento(categoria, nome) {
        history.push({pathname: '/detalhe_produto', categoriaNome: categoria, produtoNome: nome});
    }

    useEffect(() => {
        api.get(`/produto/lista/${categoriaNome}`, {
            headers: {
                Authorization: myToken,
            }
        }).then(response => {
            setProduto(response.data);
        })
    }, [myToken]);


    return (
        <ProdutoMainContainer>
            <ProdutoInsideContainer>
                <ProdutoNavigationContainer>
                    <ProdutoNavigationTitle>EStorage</ProdutoNavigationTitle>
                    <ProdutoNavigationButton
                        to="/menu"
                        color="white"
                        textColor="#ff5f6d">
                        <HomeIcon/>
                        <NavigationButtonTitle>
                            Menu
                        </NavigationButtonTitle>
                    </ProdutoNavigationButton>
                    <ProdutoNavigationButton
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
                    </ProdutoNavigationButton>
                    <ProdutoNavigationButton
                        to="/pedidos"
                        color="white"
                        textColor="#ff5f6d">
                        <AssignementIcon />
                        <NavigationButtonTitle>
                            Pedidos
                        </NavigationButtonTitle>
                    </ProdutoNavigationButton>
                </ProdutoNavigationContainer>

                <ProdutoInfoMainContainer>
                    
                    <ProdutoInfoTitleContainer>
                        <BackButton
                        to="/categorias">
                            <BackIcon />
                        </BackButton>
                        <ProdutoInfoTitle>
                            Produtos - {categoriaNome}
                        </ProdutoInfoTitle>

                    </ProdutoInfoTitleContainer>

                    <InfoMainContainer>
                        <ProdutoContainer>
                            {produto.map(produto => (
                                <Produto key={produto.nome}>
                                    <DeleteContainer>
                                    <DeleteButton>
                                        <DeleteProduto
                                            onClick={() => handleDeleteProduto(produto.nome)}
                                            style={{ fontSize: 20 }}
                                        />
                                    </DeleteButton>
                                    </DeleteContainer>
                                    <ProdutoButton
                                        onClick={() => handleProdutoDetalhamento(categoriaNome, produto.nome)}
                                    >
                                        <ProdutoIcon 
                                            style={{ fontSize: 50 }}
                                        />
                                        <ProdutoButtonTitle>
                                            {produto.nome}
                                        </ProdutoButtonTitle>
                                    </ProdutoButton>
                                </Produto>

                            ))}
                        </ProdutoContainer>
                        
                            
                        

                        <AddButtonContainer>
                            <ProdutoAddButton
                                to={{pathname: '/adicionar_produto', categoriaNome: categoriaNome}}>
                                <AddProdutoIcon />
                            </ProdutoAddButton>
                        </AddButtonContainer>
                    </InfoMainContainer>

                </ProdutoInfoMainContainer>
            </ProdutoInsideContainer>
        </ProdutoMainContainer>
    );
}