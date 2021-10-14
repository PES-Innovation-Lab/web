// import '../public/static/css/navbar.css';
// import '../css/index.css';
// import '../css/fonts.css';
// import '../css/members.css';
// import '../css/projects.css';
// import '../css/events.css';
// import '../css/hashCode.css';
// import "../node_modules/react-alice-carousel/lib/alice-carousel.css";

import '../css/global.css';
import '../css/fonts.css';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
