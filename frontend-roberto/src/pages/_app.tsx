
import type { AppProps } from 'next/app'

import { Poppins, Roboto } from '@next/font/google'
import { globalStyles } from '../styles/global'
import { FirstLine } from '../components/FirstLine'
import { Header } from '../components/Header'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className='roboto.className'>
        <FirstLine />
        <Header />
        <Component {...pageProps} />
      </main>
  )
}
