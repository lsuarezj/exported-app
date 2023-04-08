/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { useRoutes } from 'shared/hooks';
import { AppBarSymbol, HeadingSymbol } from 'shared/symbols';
import { RouteLayout, Box, RouterLink } from 'shared/components';
import { Typography } from '@mui/material';
import { useGlobalState } from 'providers';

export const HomePagePage: React.FC = ({ props }) => {
  const router = useRoutes();
  const { uncaughtErrors } = useGlobalState();

  const { Request } = props;

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
      <AppBarSymbol
        appBarProps={{ color: 'default', position: 'relative' }}
        toolbarProps={{ variant: 'regular' }}
      >
        <HeadingSymbol
          variant="h6"
          align="inherit"
          color="initial"
          component="h1"
        >
          Rick&nbsp;and&nbsp;Morty
        </HeadingSymbol>
      </AppBarSymbol>
      <HeadingSymbol
        variant="h6"
        align="inherit"
        color="initial"
        component="h3"
      >
        Characters
      </HeadingSymbol>
      <Box>
        {(Request.data?.characters?.results || [])?.map((item, itemIndex) => (
          <Fragment key={itemIndex}>
            <Typography
              variant="inherit"
              align="inherit"
              color="inherit"
              paragraph={false}
            >
              {item?.name}
            </Typography>
          </Fragment>
        ))}
      </Box>
      <RouterLink
        style={{ display: 'inline-block' }}
        absolute={false}
        variant="inherit"
        underline="none"
        color="primary"
        to={router.notFound.path}
      >
        {router.notFound.name}
      </RouterLink>
    </RouteLayout>
  );
};
