import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ReactNavbar from "./components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReactNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
