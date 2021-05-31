import React,{ useEffect, useState } from 'react';
import {View, Alert, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScreenAreaView,
  HeaderView,
  UserView,
  WelcomeText,
  BottomView,
  SearchInput,
  ListView,
  ListItem,
  ListItemText,
  ButtonsView,
  ConfirmOrCancelButtonText,
  ConfirmOrCancelButton,
  ConfirmOrCancelView,
  ItemView,
  ListItemView,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

function CategoriesScreen({navigation}) {


  const Item = ({ title }) => (
    <ItemView >
      <ListItemText>{title}</ListItemText>
    </ItemView>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
const [carrinho,setCarrinho] = useState([]); 
async function loadCarrinho() {
  const token = await AsyncStorage.getItem('@token')
  //const user = await AsyncStorage.getItem('@user')

  // setToken(token);

  // setUser(JSON.parse(user));


  api.get('/carrinho/lista', {
    headers: { Authorization: token }
  }).then(function (response) {
    setCarrinho(response.data);

  }).catch(function (error) {
    alert(error);
    console.log(error.response.data);
  });
};

useEffect(() => {
  loadCarrinho();
}, []);



  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <WelcomeText>Lista</WelcomeText>
        </UserView>

        <SearchInput placeholder="Buscar..." placeholderTextColor="#4D5656FF" />
      </HeaderView>

      <View style={{height: '10%'}}>
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
        <ListView>

          <ListItem 
            data={carrinho}            
            keyExtractor={item => String(item.id)}
            renderItem={({item: itens}) => (
              <ListItemView>
                <ListItemText>
                  {itens.nomeProduto}
                </ListItemText>
                <ListItemText>
                  {itens.quantidade}
                </ListItemText>
              </ListItemView>
            )}>        
          </ListItem>

        </ListView>
      
      <ConfirmOrCancelView>
          <ButtonsView>
            <ConfirmOrCancelButton onPress={() => navigation.goBack()}>
              <ConfirmOrCancelButtonText>Voltar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>

          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Avançar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>
        </ConfirmOrCancelView>
</BottomView>

    </ScreenAreaView>
  );
}

export default CategoriesScreen;
