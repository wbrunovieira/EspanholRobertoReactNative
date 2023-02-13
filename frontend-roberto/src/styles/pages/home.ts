import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    flexDirection: 'column',
    backgroundColor:'$gray100',
    letterSpacing: '5px',
    textTransform:'uppercase',

})

export const Title = styled('h1', {
color: '$firstline',
fontSize:'64px',
paddingTop: '80px',
paddingBottom: '80px',
position:'relative',
margin: '0 auto',

    '&::after': {
      content: "''",
      height: '5px',
      position: 'absolute',
      borderRadius:'5px',
      width: '100%',
      left: 0,
      background: '$firstline',
      display: 'block',
   
      marginRight:'40px',
      margin: '3 auto',
      
    },
    '&::before': {
        content: "''",
        height: '5px',
        position: 'absolute',
        borderRadius:'5px',
        width: '100%',
        left: 0,
        background: '$firstline',
        display: 'block',
       
        marginRight:'40px',
        margin: '0 auto',
        

      },

})

export const BannerRoberto = styled('div', {
  display: 'flex',
  marginLeft: '-40px',
  position: 'relative',

  img: {
    position: 'absolute',
    right: '-500px',
    top: '40px',
    filter: 'opacity(50%)',

  '&:first-child':{

    left:'-480px',
    filter: 'opacity(100%)',
  },
  '&:nth-child(2)':{

    left:'-510px',
    top:'-2px',
    filter: 'opacity(50%)',
  },
  '&:last-child':{

    top: '350px',
    left:'250px',
    filter: 'opacity(100%)',
  },

  }
})

export const DescriptionAbout = styled('div', {

  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  margin: '0 auto',
  position: 'relative',
  width: '100%',

 

  p:{
    color: 'white',
    fontSize:'16px',
    position: 'absolute',
    top: '-430px',
    right:'600px',
    lineHeight:' 50px',    
    fontWeight:'bold',

    '&::after': {
      content: "''",
      height: '5px',
      position: 'absolute',
      borderRadius:'5px',
      width: '100%',
      background: 'white',
      display: 'block',
      
      marginRight:'40px',
      margin: '3 auto',
      top:'240px',
      left: 0,
      
    },
    '&::before': {
      content: "''",
      height: '5px',
      position: 'absolute',
      borderRadius:'5px',
      width: '100%',
      background: 'white',
      display: 'block',
      
      marginRight:'40px',
      margin: '3 auto',
      top:'-40px',
      left: 0,
      
    },
  }
})

export const AboutButton = styled('button',{

  backgroundColor:'$yellowact',
  color: 'white',
  fontWeight:'bold',
  cursor: 'pointer',
  
  padding: '20px',
  border: 'none',
  borderRadius:'30px',
  position: 'absolute',
  top: '-150px',
})
