import {FAB, Modal, useTheme} from 'react-native-paper';
import React, {useState} from 'react';

import AddCategory from '../../forms/addCategory.form';
import AddCompra from '../../forms/addCompra.form';
import {StackScreenProps as SSP} from '@react-navigation/stack';
import {StackScreenNames} from '..';

export interface ComprasScreenProps {}

const ComprasScreen: React.FC<SSP<StackScreenNames, 'Compras'>> = () => {
  const theme = useTheme();
  const [visibleAddCompra, setVisibleAddCompra] = useState(false);
  const [visibleAddCAtegory, setVisibleAddCAtegory] = useState(false);
  const [openFabGroup, setOpenFabGroup] = useState(false);
  return (
    <>
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
        visible={visibleAddCAtegory}
        onDismiss={() => setVisibleAddCAtegory(false)}
        dismissable>
        <AddCategory onDismissModal={() => setVisibleAddCAtegory(false)} />
      </Modal>
    </>
  );
};

export default ComprasScreen;
