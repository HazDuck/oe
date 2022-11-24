import { ProductProvider } from '../context';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  )
}

export default MyApp;
