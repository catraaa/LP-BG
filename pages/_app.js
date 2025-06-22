import "../styles/tailwind.css";
import "../styles/slick.css";
import Layout from "../components/Layout/Layout"; // Pastikan jalur ini sesuai

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
