/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { HomePagePage, ErrorPagePage, NotFoundPagePage } from 'pages';
import { useRequest } from 'shared/hooks';
import {
  Root,
  RootLayoutsContainer,
  BaseLayout,
  RouterSwitchSymbol,
} from 'shared/symbols';
import { RouteHook } from 'shared/components';
import { useGlobalState } from 'providers';

export const RootContent: React.FC = ({ props }) => {
  const { uncaughtErrors } = useGlobalState();

  const HomePageWrapperContainerState = ({ children }) => {
    const Request = useRequest();

    return children({ Request });
  };

  return (
    <Root>
      <RootLayoutsContainer
        layouts={
          <BaseLayout
            content={
              <RouterSwitchSymbol
                routes={
                  <Fragment>
                    <HomePageWrapperContainerState>
                      {({ Request }) => (
                        <RouteHook
                          localStates={{ Request }}
                          path={['/']}
                          authAccess="any"
                          exact={true}
                        >
                          <HomePagePage props={{ Request }} />
                        </RouteHook>
                      )}
                    </HomePageWrapperContainerState>

                    <RouteHook path={['/500']} authAccess="any" exact={true}>
                      <ErrorPagePage />
                    </RouteHook>
                    <RouteHook path={['/404']} authAccess="any" exact={true}>
                      <NotFoundPagePage />
                    </RouteHook>
                  </Fragment>
                }
              />
            }
            path={['/', '/500', '/404']}
            exact={true}
          />
        }
      />
    </Root>
  );
};
