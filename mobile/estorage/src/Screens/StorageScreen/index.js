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

function CategoriesScreen({navigation}) {
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <WelcomeText>Estoque</WelcomeText>
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
            <ListItemText>Guanara, Garoto</ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Guanara, Garoto</ListItemText>
          </ListItemView>
          <ListItemView>
            <ListItemText>Guanara, Garoto</ListItemText>
          </ListItemView>
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
