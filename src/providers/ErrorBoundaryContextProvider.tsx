import React, { createContext, useContext } from 'react';

export type BoundaryContext = Record<string, any>;
const ErrorBoundaryContext = createContext({} as BoundaryContext);

export const ErrorBoundaryContextProvider: React.FC = (props) => {
  return (
    <ErrorBoundaryContext.Provider value={props.error}>
      {props.children}
    </ErrorBoundaryContext.Provider>
  );
};

export const useErrorBoundary = (): BoundaryContext => {
  return useContext(ErrorBoundaryContext);
};
