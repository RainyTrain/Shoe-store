import Layout from '@/components/Layout';
import Theme, { ThemeContext } from '@/Context/ThemeContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useContext } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
