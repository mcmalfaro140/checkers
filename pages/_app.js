import {  ThemeProvider } from 'styled-components'
import {myTheme} from '../styles/my-theme'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider theme={myTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
