import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ScreenAreaView,
  HeaderView,
  UserView,
  WelcomeText,
  HeaderButtonsView,
  HeaderButtons,
  BottomView,
  ButtonsView,
  BottomButtons,
  SearchInput,
  ConfirmOrCancelView,
  ConfirmOrCancelButton,
  ConfirmOrCancelButtonText,
  ButtonsText,
} from './styles';

function ProductsScreen({navigation}) {
  const [Password, onChangePassword] = React.useState('');
  return (
    <ScreenAreaView>
      <HeaderView colors={['#FF5F6D', '#FF7A65', '#FF9362', '#FFAC66']}>
        <UserView>

          <WelcomeText>Bebidas</WelcomeText>
        </UserView>

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

      <ConfirmOrCancelView>

          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Cervejas</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>
          

          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Destilados</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>

          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Sucos</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>

          <ButtonsView>
            <ConfirmOrCancelButton>
              <ConfirmOrCancelButtonText>Outros</ConfirmOrCancelButtonText>
            </ConfirmOrCancelButton>
          </ButtonsView>
        </ConfirmOrCancelView>


      <BottomView>
        <ButtonsView>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <BottomButtons></BottomButtons>
        </ButtonsView>

        <ButtonsView>
          <BottomButtons></BottomButtons>
        </ButtonsView>

      </BottomView>
    </ScreenAreaView>
  );
}

export default ProductsScreen;
