import React, { createContext, useContext } from 'react';
import config from '../data/config';
import menuItems from '../data/menuItems';
import testimonials from '../data/testimonials';

const AppContext = createContext();

export function AppProvider({ children }) {
  const value = {
    config,
    menuItems,
    testimonials
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
