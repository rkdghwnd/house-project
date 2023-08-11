import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import Head from 'next/head';
import '../styles/main.scss';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../store';

function todayHouse({ Component, pageProps }) {
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

export default todayHouse;
