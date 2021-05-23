import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ScreenAreaView,
  HeaderView,
  UserView,
  WelcomeText,
  BottomView,
  SearchInput,
  ListView,
  ListItemView,
  ListItemText,
  ButtonsView,
  ConfirmOrCancelButtonText,
  ConfirmOrCancelButton,
  ConfirmOrCancelView,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HistoryScreen({navigation}) {
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <WelcomeText>Historico</WelcomeText>
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
          <ListItemView>
            <ListItemText>Supermercado Stonks 20/03/2021     R$125,00</ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Supermercado Stonks 31/03/2021     R$47,50</ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Supermercado Stonks 05/04/2021     R$356,90</ListItemText>
          </ListItemView>
        </ListView>
      
      <ConfirmOrCancelView>
          <ButtonsView>
            <ConfirmOrCancelButton onPress={() => navigation.goBack()}>
              <ConfirmOrCancelButtonText>Voltar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>
      </ConfirmOrCancelView>
 </BottomView>

    </ScreenAreaView>
  );
}

export default HistoryScreen;
