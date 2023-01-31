import { globalCss } from ".";
import { Roboto , Poppins} from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets:['latin']
  })

  const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal'],
    subsets:['latin']
    })

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})