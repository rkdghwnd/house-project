import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import Head from 'next/head';
import '../styles/main.scss';
import { Provider } from 'react-redux';
import store from '../store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
