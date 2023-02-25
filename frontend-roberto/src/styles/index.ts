
import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({

  
  theme: {
    
    
    linearGradient: (value:any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    colors: {

      firstline:'#12232F',
      white: '#FFF',
      yellowact:'#EFBD2F',
      blue:'#4257A7',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    }
  }
})
