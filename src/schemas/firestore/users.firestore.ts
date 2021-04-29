import {ColorSchemeName} from 'react-native';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const userCollection = firestore().collection('Users');

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
    await userCollection.doc(uid).set(firestoreUserToAdd);
  } catch (error) {
    console.log(error);
  }
};

export type FirestoreUser = Partial<FirebaseAuthTypes.User> & {
  colorScheme: ColorSchemeName;
  isActive: boolean;
};
