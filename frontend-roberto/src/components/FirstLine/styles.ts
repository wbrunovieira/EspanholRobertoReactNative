import { FileX } from "phosphor-react"
import { styled } from "../../styles"

export const Container = styled('div', {
  backgroundColor: '$firstline',
  border: 0,
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',


  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export const Whatapp = styled('a', {
    backgroundColor: '$firstline',
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

    

})
export const TextoWhatis = styled('p', {
    color:'$white',
    fontSize: 14,
    paddingLeft:10,
    paddingRight:100,

    

})