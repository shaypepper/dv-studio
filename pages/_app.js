import '../styles/globals.css'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
