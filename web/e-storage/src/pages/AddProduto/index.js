import api from "../../services/api";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
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
    ProdutoInfoTitleContainer,
    ProdutoInfoTitle,
    BackButton,
    BackIcon,
    InfoMainContainer,
    InputRow,
    AddProdutoInputContainer,
    TitleAddProdutoInput,
    AddProdutoInput,
    DescricaoInput,
    ProdutoAddButton,
    AddProdutoIcon,
    AddButtonContainer,

} from "./styles.js";

export default function AddProduto() {
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [peso, setPeso] = useState("1");
    const [medida, setMedida] = useState("");
    const [preco, setPreco] = useState("");
    const [detalhamento, setDetalhamento] = useState("");
    const [filename, setFilename] = useState("");
    const [path, setPath] = useState("C:\\Users\\isabe\\E-Storage\\backend\\uploads\\fa11f498d13871bc.jpg");
    const myToken = `Bearer ${localStorage.getItem("token")}`;
    const history = useHistory();

    async function handleCadastroProduto(e) {
        e.preventDefault();

        const data = {
            nome,
            marca,
            peso,
            medida,
            preco,
            detalhamento,
            filename,
            path,
        };

        //`/produto/cadastro/${nome}
        api.post('/produto/cadastro/Frios', data, {headers: {Authorization: myToken}}).then(function (response) {

            console.log(response.data.categoria);
            alert(
                "Produto cadastrado com sucesso"
              );
            history.push('/produtos');

          }).catch(function (error) {

            console.log(myToken);
            console.log({error});
            alert(error.response.data.error);

          });

    }

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
                        to="/produtos">
                            <BackIcon />
                        </BackButton>
                        <ProdutoInfoTitle>
                            Adicionar Produto
                        </ProdutoInfoTitle>

                    </ProdutoInfoTitleContainer>

                    <InfoMainContainer onSubmit={handleCadastroProduto}>
                        <InputRow>
                            <AddProdutoInputContainer>
                                <TitleAddProdutoInput>
                                Nome do Item
                                </TitleAddProdutoInput>
                                <AddProdutoInput 
                                    placeholder="Ex: Leite Ninho" 
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <TitleAddProdutoInput>
                                Marca
                                </TitleAddProdutoInput>
                                <AddProdutoInput 
                                    placeholder="Ex: Nestle" 
                                    value={marca}
                                    onChange={e => setMarca(e.target.value)}
                                />
                            
                                <TitleAddProdutoInput >
                                Peso/Volume
                                </TitleAddProdutoInput>
                                <AddProdutoInput 
                                    placeholder="Ex: 500g" 
                                    value={medida}
                                    onChange={e => setMedida(e.target.value)}
                                />
                                <TitleAddProdutoInput>
                                Preço
                                </TitleAddProdutoInput>
                                <AddProdutoInput 
                                    placeholder="Ex: 20,00" 
                                    value={preco}
                                    onChange={e => setPreco(e.target.value)}    
                                />
                            </AddProdutoInputContainer>

                            <AddProdutoInputContainer>
                                <TitleAddProdutoInput>
                                Descrição
                                </TitleAddProdutoInput>
                                <DescricaoInput 
                                    placeholder="Ex: Leite Ninho" 
                                    value={detalhamento}
                                    onChange={e => setDetalhamento(e.target.value)}   
                                />

                                <TitleAddProdutoInput>
                                Imagem
                                </TitleAddProdutoInput>
                                <AddProdutoInput 
                                    value={filename}
                                    onChange={e => setFilename(e.target.value)}
                                />
                            
                            </AddProdutoInputContainer>
                        </InputRow>
                        
                        <AddButtonContainer>
                            <ProdutoAddButton
                               type='submit'>
                                <AddProdutoIcon />
                            </ProdutoAddButton>
                        </AddButtonContainer>
                    </InfoMainContainer>

                   

                </ProdutoInfoMainContainer>
            </ProdutoInsideContainer>
        </ProdutoMainContainer>

    );
}