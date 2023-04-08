/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { RouteLayout, RouterLink } from 'shared/components';
import { useGlobalState } from 'providers';

export const NotFoundPagePage: React.FC = ({ props }) => {
  const { uncaughtErrors } = useGlobalState();

  return (
    <RouteLayout
      style={{
        height: '100%',
        display: 'flex',
        flexGrow: 1,
        flexBasis: '0%',
        flexShrink: 1,
        flexDirection: 'column',
      }}
    >
      <RouterLink
        style={{ display: 'inline-block' }}
        absolute={false}
        variant="inherit"
        underline="none"
        color="primary"
        to="/"
      >
        you´re&nbsp;drunk&nbsp;go&nbsp;home
      </RouterLink>
    </RouteLayout>
  );
};
