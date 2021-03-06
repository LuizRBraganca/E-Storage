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
  AdressButtons,
  PaymentButtons,
  ConfirmOrCancelView,
  ConfirmOrCancelButton,
  ConfirmOrCancelButtonText,
  ButtonsText,
} from './styles';

function DeliveryScreen({navigation}) {
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
           onPress={() => navigation.navigate('MarketScreen')}></HeaderButtons>

          <HeaderButtons
            onPress={() => alert('Ja esta na pagina')}></HeaderButtons>
        </HeaderButtonsView>
      </HeaderView>

      <View style={{height: '15%'}}>
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
          <AdressButtons>
            <ButtonsText>Endereco cadastrado</ButtonsText>
          </AdressButtons>
        </ButtonsView>

        <ButtonsView>
          <PaymentButtons>
            <ButtonsText>Forma de pagamento</ButtonsText>
          </PaymentButtons>
        </ButtonsView>
        <ConfirmOrCancelView>
          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Cancelar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>

          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Confirmar</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>
        </ConfirmOrCancelView>
      </BottomView>
    </ScreenAreaView>
  );
}

export default DeliveryScreen;
