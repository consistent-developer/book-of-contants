import Headers from '../components/headers'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../stores/authContaxts'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <div className="noSelect">
      <Headers />
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>

    </div>
  )
}

export default MyApp
