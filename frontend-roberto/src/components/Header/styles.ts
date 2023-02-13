import { SignIn } from 'phosphor-react';
import { styled } from "../../styles"

export const Container = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  Width:'1066px',
  backgroundColor: '$gray100',
  border: 0,
  height: '400',
  paddingTop:20,
 



})

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight:80,
  textAlign:'end',
  paddingLeft: 1,
  backgroundColor: '$gray100',
 marginRight:20,
 marginLeft:20,
  boxShadow:'6px 6px 23px -13px rgba(0,0,0.88)',



});

export const Link = styled('a', {
  display: 'inline-block',
  padding: '10px',
  fontSize:'12px',
  
  color: '$firstline',
  textDecoration: 'none',
  fontWeight:'bold',
  fontFamily:'Poppins',
  cursor: 'pointer',
  transition: '0.2s ease-in',
  letterSpacing: '3px',
  

  p: {

    

    '&::before': {
      content: '',
      height: '16px',
      width: '1px',
     
      background: '$firstline',
      display: 'block',
      float: 'left',
      top: 0,
      marginRight:'40px',

    },
    
    '&::last-child':{
      content:'',
      height: '0px',
      width: '0px',
      background: '$firstline',
      display: 'block',
      float: 'left',
      marginRight:'40px',
    }

  },


  '&:hover': {
    filter: 'brightness(0.8)',
    transform: 'scale(1.2) ' 
  }
});

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  color:'white',
  backgroundColor: '$yellowact',
  fontWeight:'bold',
  padding: 12,
  border: 'none',
  borderRadius:'5px',
  cursor: 'pointer',

  SignIn: {
    padding: 20
  },
  '&:hover': {
    filter: 'brightness(0.8)'
  }
  
  
})