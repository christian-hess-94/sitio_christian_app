import {FAB, Modal, useTheme} from 'react-native-paper';
import React, {useContext, useState} from 'react';

import AddCategory from '../../forms/addCategory.form';
import AddCompra from '../../forms/addCompra.form';
import {CategoryContext} from '../../context/categories.context';
import CategoryDivider from '../../components/categoryDivider';
import EditCompra from '../../forms/editCompra.form';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {FlatList} from 'react-native';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';

export interface ComprasScreenProps {}

const ComprasScreen: React.FC<SSP<StackScreenNames, 'Compras'>> = () => {
  const theme = useTheme();
  const [visibleAddCompra, setVisibleAddCompra] = useState(false);
  const [visibleEditCompra, setVisibleEditCompra] = useState(false);
  const [
    compraToEdit,
    setCompraToEdit,
  ] = useState<FirebaseFirestoreTypes.DocumentData>();
  const [visibleAddCAtegory, setVisibleAddCAtegory] = useState(false);
  const [openFabGroup, setOpenFabGroup] = useState(false);
  const {categories} = useContext(CategoryContext);
  const openEditCompraModal = (compra: FirebaseFirestoreTypes.DocumentData) => {
    setVisibleEditCompra(true);
    setCompraToEdit(compra);
  };
  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CategoryDivider
            category={item}
            openEditCompraModal={openEditCompraModal}
          />
        )}
      />
      <FAB.Group
        visible
        open={openFabGroup}
        icon={openFabGroup ? 'close' : 'plus'}
        onPress={() => setOpenFabGroup(true)}
        actions={[
          {icon: 'food-apple', onPress: () => setVisibleAddCompra(true)},
          {
            icon: 'format-list-bulleted',
            onPress: () => setVisibleAddCAtegory(true),
          },
        ]}
        onStateChange={({open}) => setOpenFabGroup(open)}
        color={theme.colors.text}
      />
      <Modal
        visible={visibleAddCompra}
        onDismiss={() => setVisibleAddCompra(false)}
        dismissable>
        <AddCompra onDismissModal={() => setVisibleAddCompra(false)} />
      </Modal>
      <Modal
        visible={visibleEditCompra}
        onDismiss={() => {
          setVisibleEditCompra(false);
        }}
        dismissable>
        <EditCompra
          compraToEdit={compraToEdit}
          onDismissModal={() => setVisibleEditCompra(false)}
        />
      </Modal>
      <Modal
        visible={visibleAddCAtegory}
        onDismiss={() => setVisibleAddCAtegory(false)}
        dismissable>
        <AddCategory onDismissModal={() => setVisibleAddCAtegory(false)} />
      </Modal>
    </>
  );
};

export default ComprasScreen;
