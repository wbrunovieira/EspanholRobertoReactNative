import { styled } from "../../styles"

export const Container = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  Width:'1066px',
  backgroundColor: '$white',
  border: 0,
  height: '400',
  paddingTop:40


})

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight:80,
  textAlign:'end',
  paddingLeft: 100,


});

export const Link = styled('a', {
  display: 'inline-block',
  padding: '20px',
  
  color: '$firstline',
  textDecoration: 'none',
  fontWeight:'bold',
  cursor: 'pointer',
  transition: '0.2s ease-in',

  // '&::after': {
  //   content: '|',
  //   display: 'block',
  //   position: 'absolute',
  //   color: '$firstline',
  //   top: '-3px',
  //   left: '-3px',
  //   width: '15px',
  //   height: '15px',
   
  // },

  '&:hover': {
    filter: 'brightness(0.8)',
    transform: 'scale(1.2) ' 
  }
});

export const LoginButton = styled('button', {
  color:'white',
  backgroundColor: '$yellowact',
  padding: 6,
  border: 'none',
  borderRadius:'5px',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
  
  
  
})