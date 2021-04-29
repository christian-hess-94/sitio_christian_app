import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const userCollection = firestore().collection('Users');

export const addUser = async (authInfo: FirebaseAuthTypes.User) => {
  try {
    const {uid, email, displayName, phoneNumber} = authInfo;
    const firestoreUserToAdd = {uid, email, displayName, phoneNumber};
    await userCollection.doc(uid).set(firestoreUserToAdd);
  } catch (error) {
    console.log(error);
  }
};
