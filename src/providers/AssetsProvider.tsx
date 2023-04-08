import React, { createContext, useContext } from 'react';

type AssetName = string;

type Asset = Record<string, unknown>;

type AssetList = Record<AssetName, Asset>;

const AssetsContext = createContext<AssetList>({});

const assets = {};

export const AssetsProvider: React.FC = ({ children }) => {
  return (
    <AssetsContext.Provider value={assets}>{children}</AssetsContext.Provider>
  );
};

export const useAssets = (): AssetList => {
  return useContext(AssetsContext);
};
