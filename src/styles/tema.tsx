import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

export const theme = extendTheme({
  colors: {
    
  },
  fonts: {
    heading: 'Nunito Sans',
    body: 'Nunito Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'rgb(250, 246, 245)',
        bgImage: 'url(/images/background.png)',
        bgRepeat: 'no-repeat',
        bgPosition: 'top right',
        bgAttachment: 'fixed',
        color: 'gray.700'
      }
    }
  },
  breakpoints
})