/* eslint-disable react-native/no-inline-styles */

import {Card, Paragraph, Title, useTheme} from 'react-native-paper';
import React, {useContext} from 'react';

import {CategoryContext} from '../../../context/categories.context';
import {ComprasContext} from '../../../context/compras.context';
import CustomCard from '../../../components/customCard';
import {Row} from '../../../components/flex-layout/styles';
import {useNavigation} from '@react-navigation/core';

interface DespensaCardProps {}

const DespensaCard: React.FunctionComponent<DespensaCardProps> = () => {
  const {navigate} = useNavigation();
  const {categories} = useContext(CategoryContext);
  const {compras} = useContext(ComprasContext);
  const theme = useTheme();
  return (
    <CustomCard
      title="Despensa"
      content={
        <Row>
          <Card
            style={{
              padding: 4,
              margin: 4,
              borderWidth: 2,
              flex: 1,
              borderColor: theme.colors.error,
            }}>
            <Paragraph style={{alignSelf: 'center', color: theme.colors.error}}>
              Faltando
            </Paragraph>
            <Title style={{alignSelf: 'center', color: theme.colors.error}}>
              {compras.filter(compra => compra.quantity === '0').length}
            </Title>
          </Card>
          <Card style={{padding: 4, margin: 4, borderWidth: 2, flex: 1}}>
            <Paragraph style={{alignSelf: 'center'}}>Items</Paragraph>
            <Title style={{alignSelf: 'center'}}>
              {compras.reduce(
                (acc, compra) => acc + parseInt(compra.quantity, 10),
                0,
              )}
            </Title>
          </Card>
          <Card style={{padding: 4, margin: 4, borderWidth: 2, flex: 1}}>
            <Paragraph style={{alignSelf: 'center'}}>Categorias</Paragraph>
            <Title style={{alignSelf: 'center'}}>{categories.length}</Title>
          </Card>
        </Row>
      }
      actions={[
        {
          text: 'Ver despensa',
          onPress: () => navigate('Despensa', {isShoppingList: false}),
          mode: 'text',
          color: 'primary',
        },
        {
          text: 'Lista de compras',
          onPress: () => navigate('Despensa', {isShoppingList: true}),
          mode: 'contained',
          color: 'primary',
        },
      ]}
    />
  );
};

export default DespensaCard;
