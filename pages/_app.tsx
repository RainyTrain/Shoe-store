import Layout from '@/components/Layout';
import Theme from '@/Context/ThemeContext';
import { Provider } from 'react-redux';
import store from '../Features/Redux/Store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </Provider>
    </>
  );
}
