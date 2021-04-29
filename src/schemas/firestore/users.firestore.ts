import {ColorSchemeName} from 'react-native';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

export const addUser = async (
  authInfo: FirebaseAuthTypes.User,
  colorScheme?: ColorSchemeName,
) => {
  try {
    const {uid, email, displayName, phoneNumber} = authInfo;
    const firestoreUserToAdd: FirestoreUser = {
      uid,
      email,
      displayName,
      phoneNumber,
      colorScheme: colorScheme || 'light',
      isActive: false,
    };
    await usersCollection.doc(uid).set(firestoreUserToAdd);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (uid: string): Promise<FirestoreUser | null> => {
  try {
    const userReturned = await usersCollection.doc(uid).get();
    return userReturned.data() as FirestoreUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export type FirestoreUser = Partial<FirebaseAuthTypes.User> & {
  colorScheme: ColorSchemeName;
  isActive: boolean;
};
