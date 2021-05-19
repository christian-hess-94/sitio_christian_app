import firestore from '@react-native-firebase/firestore';

export const comprasCollection = firestore().collection('Compras');

export const addCompra = async (compraInfo: FirestoreCompra) => {
  try {
    await comprasCollection.add(compraInfo);
  } catch (error) {
    console.log(error);
  }
};

export const getCompra = async (
  uid: string,
): Promise<FirestoreCompra | null> => {
  try {
    const userReturned = await comprasCollection.doc(uid).get();
    return userReturned.data() as FirestoreCompra;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCompra = async (uid: string, newCompra: FirestoreCompra) => {
  try {
    await comprasCollection.doc(uid).update(newCompra);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export type FirestoreCompra = {
  name: string | null;
  quantity: string;
  quantityGoal: string;
  categoryId: string | undefined;
};
