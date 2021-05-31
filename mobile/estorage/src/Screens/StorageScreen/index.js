import React, {
  useState,
  useEffect
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';
import api from '../../services/api';
import {
  ScreenAreaView,
  HeaderView,
  UserView,
  WelcomeText,
  BottomView,
  SearchInput,
  ListView,
  ListItemView,
  ListItemViewEsq,
  ListItemViewEDir,
  ListItemText,
  ButtonsView,
  ConfirmOrCancelButtonText,
  ConfirmOrCancelButton,
  ConfirmOrCancelView,

} from './styles';

function StorageScreen({ navigation }) {

  const [carrinho, setCarrinho] = useState();

  async function loadEstoque() {

    const token = await AsyncStorage.getItem('@token')

    api.get('/estoque/lista', {
      headers: { Authorization: token }
    }).then(function (response) {
      setCarrinho(response.data);

    }).catch(function (error) {
      alert(error);
      console.log(error.response.data);
    });
  };

  useEffect(() => {
    loadEstoque();
  }, []);


  return (

    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <WelcomeText>Estoque</WelcomeText>
        </UserView>

        <SearchInput placeholder="Buscar..." placeholderTextColor="#4D5656FF" />
      </HeaderView>

      <View style={{ height: '10%' }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#FFAC66',
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderTopRightRadius: 100,
          }}></View>
      </View>
      <BottomView>
        <ListView
          data={carrinho}
          scrollEnabled={true}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: itens }) => (
            <ListItemView>
              <ListItemViewEsq>
                <ListItemText>
                  Nome: {itens.nome}
                </ListItemText>
                <ListItemText>
                  Marca: {itens.marca}
                </ListItemText>
              </ListItemViewEsq>
              <ListItemViewEDir>
                <ListItemText>
                  Valid: {itens.data_de_validade}
                </ListItemText>
                <ListItemText>
                  Quant: {itens.quantidade}
                </ListItemText>
              </ListItemViewEDir>
            </ListItemView>
          )}/>


        <ConfirmOrCancelView>
          <ButtonsView>
            <ConfirmOrCancelButton onPress={() => navigation.goBack()}>
              <ConfirmOrCancelButtonText>Voltar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
            <ConfirmOrCancelButton onPress={() => navigation.navigate('AddStorageScreen')}>
              <ConfirmOrCancelButtonText>Adicionar Produto</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>
        </ConfirmOrCancelView>
      </BottomView>

    </ScreenAreaView>
  );
}

export default StorageScreen;
