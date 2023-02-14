
import { styled } from "../../styles"

export const Container = styled('div', {
  display: 'flex',
  flex: '1',
  backgroundColor: '$firstline',
  border: 0,
  // position: 'fixed',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'space-around',
   margin: '0 auto',
  MaxWidth:'100%',


  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export const Whatapp = styled('a', {
    
    border: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  
  
    '&:hover': {
      filter: 'brightness(0.8)'
    }
  })

export const TextoWhois = styled('p', {
    color:'$white',
    fontSize: 14,
    paddingLeft:200,
    paddingRight:100,
    
    fontWeight:'bold'

    

})
export const TextoWhatis = styled('p', {
    color:'$white',
    fontSize: 14,
    paddingLeft:10,
    paddingRight:100,
    
    fontWeight:'bold',

    

})