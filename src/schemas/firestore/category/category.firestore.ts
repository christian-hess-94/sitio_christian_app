import firestore from '@react-native-firebase/firestore';

export const categoriesCollection = firestore().collection('Categories');

export const addCategory = async (categoryInfo: FirestoreCategory) => {
  try {
    await categoriesCollection.add(categoryInfo);
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (
  uid: string,
): Promise<FirestoreCategory | null> => {
  try {
    const userReturned = await categoriesCollection.doc(uid).get();
    return userReturned.data() as FirestoreCategory;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCategory = async (
  uid: string,
  newCategory: FirestoreCategory,
) => {
  try {
    await categoriesCollection.doc(uid).update(newCategory);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export type FirestoreCategory = {
  uid?: string | null;
  name: string | null;
};
