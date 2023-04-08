import React, {
  Fragment,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { useResourceClient } from 'shared/hooks/useResourceClient';

const REQUEST = gql` query my{
  characters{ 
    results{
      name
      gender
      id
      species
    }
    info{
      pages
    }
  }
}`;

export const useRequest = () => {
  const apiEndpoint = 'https://rickandmortyapi.com/graphql';
  const client = useMemo(() => useResourceClient(apiEndpoint), [
    apiEndpoint,
    JSON.stringify('https://rickandmortyapi.com/graphql'),
  ]);

  const queryResult = useQuery(REQUEST, {
    fetchPolicy: 'cache-first',
    errorPolicy: 'none',
    onCompleted: (data) => {
      console.log('run');
    },
    skip: false,
    pollInterval: parseInt('0', 10),
    notifyOnNetworkStatusChange: false,
    context: {},
    client,
  });
  const propsResult = {
    name: 'Request',
    type: 'query',
    notifyOn: false,
    fetchPolicy: 'cache-first',
    errorPolicy: 'none',
    skip: false,
    pollInterval: parseInt('0', 10),
  };
  const [data, setData] = useState();
  const transformer = (data) => {
    // return formatData(data).filter(row => row.quantity > 20)
    return data;
  };
  const onCompleted = (data) => {
    console.log('run');
  };
  const onError = (error) => error;
  const fetchData = useCallback(
    async (options) => {
      try {
        const result = await queryResult
          .refetch(options?.variables)
          .then(({ data }) => {
            const transformedData = transformer?.(data);
            onCompleted?.(data);
            queryResult.error && onError(data);
            setData(transformedData);
            return transformedData;
          });
        return result;
      } catch (error) {
        onError(error);
      }
    },
    [queryResult],
  );

  useEffect(() => {
    fetchData();
  }, [queryResult.called]);

  return {
    ...queryResult,
    ...propsResult,
    run: fetchData,
    data,
    query: ` query my{
  characters{ 
    results{
      name
      gender
      id
      species
    }
    info{
      pages
    }
  }
}`,
  };
};
