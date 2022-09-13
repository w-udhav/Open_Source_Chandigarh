import '../styles/globals.css'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
