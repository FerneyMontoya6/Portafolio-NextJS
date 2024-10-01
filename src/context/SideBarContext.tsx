"use client"

import { createContext, useState, useContext } from 'react';

const SideBarContext = createContext({
  position: '-left-72',
  togglePosition: () => {},
});

export const PositionProvider = ({ children }: {children: React.ReactNode}) => {
  const [position, setSetPosition] = useState('-left-72');

  const togglePosition = () => {
    setSetPosition((prevPosition) => (prevPosition === '-left-72' ? '-left-0' : '-left-72'));
  };

  return (
    <SideBarContext.Provider value={{ position, togglePosition }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const usePosition = () => useContext(SideBarContext);
