import {Button, Menu, Text, TextInput, useTheme} from 'react-native-paper';
import React, {useState} from 'react';

import Customcard from '../components/customCard';
import {StyledModalContainer} from './addCategory.styles';

interface AddCompraFormProps {}

const AddCompra: React.FC<AddCompraFormProps> = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const theme = useTheme();
  return (
    <StyledModalContainer>
      <Customcard
        title="Adicionar Compra"
        content={
          <>
            <Text>Compra</Text>
            <TextInput mode="outlined" />
            <Menu
              visible={visibleMenu}
              onDismiss={() => setVisibleMenu(false)}
              anchor={
                <Button
                  color={theme.colors.primary}
                  onPress={() => setVisibleMenu(true)}>
                  Escolher categoria
                </Button>
              }>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
            <Button>Adicionar</Button>
          </>
        }
      />
    </StyledModalContainer>
  );
};

export default AddCompra;
