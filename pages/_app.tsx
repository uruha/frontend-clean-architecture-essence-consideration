import * as React from 'react';
import { AppProps } from 'next/app';
import { DIContainerContext } from '~/web/view/context';
import container from '~/web/view/container';

const ExApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DIContainerContext.Provider value={container}>
      <Component {...pageProps} />
    </DIContainerContext.Provider>
  );
};

export default ExApp;
