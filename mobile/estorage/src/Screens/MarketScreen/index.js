import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ScreenAreaView,
  HeaderView,
  ImageView,
  UserView,
  WelcomeText,
  HeaderButtonsView,
  HeaderButtons,
  BottomView,
  ButtonsView,
  BottomButtons,
  ButtonsTitle,
  SearchInput,
} from './styles';

function MarketScreen({navigation}) {
  const [Password, onChangePassword] = React.useState('');
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>
          <ImageView />

          <WelcomeText>Bem Vindo, Usuario</WelcomeText>
        </UserView>
        <HeaderButtonsView>
          <HeaderButtons
            onPress={() => navigation.navigate('ProfileScreen')}></HeaderButtons>
          <HeaderButtons
            onPress={() =>
              alert("Ja esta na pagina")
            }></HeaderButtons>

          <HeaderButtons
            onPress={() =>
              navigation.navigate('DeliveryScreen')
            }></HeaderButtons>
        </HeaderButtonsView>

        <SearchInput
            onChangeText={onChangePassword}
            value={Password}
            placeholder="Buscar..."
            placeholderTextColor="#4D5656FF"
          />

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
        <ButtonsView>
          <ButtonsTitle>Bebidas</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Frios</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Hortifruti</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Limpeza</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Confeitaria</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <ButtonsTitle>Pescados</ButtonsTitle>
          <BottomButtons></BottomButtons>
        </ButtonsView>

      </BottomView>
    </ScreenAreaView>
  );
}

export default MarketScreen;
