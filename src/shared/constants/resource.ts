import { RESOURCE_TYPES, RESOURCE_NAMES, ResourceList } from '../types';

export const RESOURCES_LIST: ResourceList = {
  rnM: {
    name: RESOURCE_NAMES.rnM,
    endpoint: 'https://rickandmortyapi.com/graphql',
    type: RESOURCE_TYPES.graphql,
  },
};
