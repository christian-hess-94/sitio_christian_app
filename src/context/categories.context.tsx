import React, {createContext, useEffect, useState} from 'react';

import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {categoriesCollection} from '../schemas/firestore/category/category.firestore';

interface CategoryLogic {
  categories: FirebaseFirestoreTypes.DocumentData[];
  setCategories: React.Dispatch<
    React.SetStateAction<FirebaseFirestoreTypes.DocumentData[]>
  >;
  categoriesError: string;
  setCategoriesError: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryContext = createContext<CategoryLogic>({
  categories: [],
  setCategories: () => null,
  categoriesError: '',
  setCategoriesError: () => null,
});
const CategoryContextProvider: React.FC = ({children}) => {
  const [categories, setCategories] = useState<
    FirebaseFirestoreTypes.DocumentData[]
  >([]);
  const [categoriesError, setCategoriesError] = useState('');
  const categoryValues = {
    categories,
    setCategories,
    categoriesError,
    setCategoriesError,
  };
  useEffect(() => {
    categoriesCollection.onSnapshot(
      querySnapshot => {
        let data: FirebaseFirestoreTypes.DocumentData[] = [];
        querySnapshot.forEach(doc => data.push({id: doc.id, ...doc.data()}));
        setCategories(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
      },
      error => {
        setCategoriesError(error.message);
      },
    );
  }, []);
  return (
    <CategoryContext.Provider value={categoryValues}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
