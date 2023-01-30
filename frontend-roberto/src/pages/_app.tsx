
import type { AppProps } from 'next/app'

import { Poppins } from '@next/font/google'
import { globalStyles } from '../styles/global'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (

    <Component {...pageProps} />
  )
}
