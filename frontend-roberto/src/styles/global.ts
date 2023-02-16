import { globalCss } from ".";
import { Poppins} from '@next/font/google'

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
    fontFamily: 'Poppins',
    fontWeight: 400
  }
})