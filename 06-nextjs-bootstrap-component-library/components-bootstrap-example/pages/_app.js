/*
This is essentially the "entrypoint to the application."

We're going to import our bootstrap entrypoint into this
file. This is going to run on every single page.
*/
import 'bootstrap/dist/css/bootstrap.min.css';

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
