import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { loadFonts } from '@module-federation-next/fonts';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const LoadFontsComponent = () => {
  useEffect(() => {
    loadFonts();
  }, []); // Chỉ chạy một lần khi component mount trên client

  return null; // Component không render gì cả, chỉ chạy logic
};

// Sử dụng dynamic với ssr: false
const LoadFonts = dynamic(() => Promise.resolve(LoadFontsComponent), {
  ssr: false, // Chạy chỉ trên client
});

function CustomApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' })
        .then((registration) => {
          console.log(
            'Service worker registered successfully. Scope:',
            registration.scope
          );
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Welcome to customer!</title>
      </Head>
      <main className="app">
        {/* <LoadFonts /> */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
