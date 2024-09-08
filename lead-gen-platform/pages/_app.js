// pages/_app.js

import '../styles/globals.css'; // Import global CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
