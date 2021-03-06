import React, {createContext, useEffect, useState} from 'react';

import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {comprasCollection} from '../schemas/firestore/compra/compra.firestore';

interface ComprasLogic {
  selectedCompra: FirebaseFirestoreTypes.DocumentData;
  setSelectedCompra: React.Dispatch<
    React.SetStateAction<FirebaseFirestoreTypes.DocumentData>
  >;
  compras: FirebaseFirestoreTypes.DocumentData[];
  setCompras: React.Dispatch<
    React.SetStateAction<FirebaseFirestoreTypes.DocumentData[]>
  >;
  comprasError: string;
  setComprasError: React.Dispatch<React.SetStateAction<string>>;
}

export const ComprasContext = createContext<ComprasLogic>({
  selectedCompra: [],
  setSelectedCompra: () => null,
  compras: [],
  setCompras: () => null,
  comprasError: '',
  setComprasError: () => null,
});

const CompraContextProvider: React.FC = ({children}) => {
  const [
    selectedCompra,
    setSelectedCompra,
  ] = useState<FirebaseFirestoreTypes.DocumentData>([]);
  const [compras, setCompras] = useState<FirebaseFirestoreTypes.DocumentData[]>(
    [],
  );
  const [comprasError, setComprasError] = useState('');
  const comprasValues = {
    selectedCompra,
    setSelectedCompra,
    compras,
    setCompras,
    comprasError,
    setComprasError,
  };
  useEffect(() => {
    comprasCollection.onSnapshot(
      querySnapshot => {
        let data: FirebaseFirestoreTypes.DocumentData[] = [];
        querySnapshot.forEach(doc => data.push({id: doc.id, ...doc.data()}));
        setCompras(data);
      },
      error => {
        setComprasError(error.message);
      },
    );
  }, []);
  return (
    <ComprasContext.Provider value={comprasValues}>
      {children}
    </ComprasContext.Provider>
  );
};

export default CompraContextProvider;
