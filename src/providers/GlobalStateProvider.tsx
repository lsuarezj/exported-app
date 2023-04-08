import React, { createContext, useContext } from 'react';

export type GlobalState = Record<string, any>;
const GlobalStateContext = createContext<GlobalState>({});

export const GlobalStateProvider: React.FC = (props) => {
  return (
    <GlobalStateContext.Provider value={props.states}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalState => {
  return useContext(GlobalStateContext);
};
