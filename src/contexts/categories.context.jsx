import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

const LOCAL_CATEGORIES_MAP = SHOP_DATA.reduce((acc, category) => {
  acc[category.title.toLowerCase()] = category.items;
  return acc;
}, {});

export const CategoriesContext = createContext({
  categoriesMap: LOCAL_CATEGORIES_MAP,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState(LOCAL_CATEGORIES_MAP);
  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments("categories");
        if (categoryMap && Object.keys(categoryMap).length) {
          setCategoriesMap(categoryMap);
        }
      } catch (error) {
        console.error(
          "Failed to load categories from Firestore; falling back to local data.",
          error,
        );
      }
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
