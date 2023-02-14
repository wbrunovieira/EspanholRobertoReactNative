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

    img :{

      objectFit:'cover',
    }

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
  marginBottom:'40px',

 

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

export const BannerMotivation = styled('div', {
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  maxWidth:'1061px',
  marginTop:'40px',
  position: 'relative',

  '&::before': {
    content: "''",
    height: '5px',
    position: 'absolute',
    borderRadius:'5px',
    width: '100%',
    background: '#4257A7',
    display: 'block',
    
    marginRight:'40px',
    margin: '3 auto',
    top:'-40px',
    left: 0,
    
  },

})

export const TextMotivation = styled('div', {
  display: 'flex',
  justifyContent:'center',
  margin: '0 auto',
  alignItems:'center',
  flexDirection:'column',
  
  backgroundColor:'#4257A7',
  width: '100%',
  height: '377px',
  borderRadius:'0px 50px 50px 0px',

  p: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    padding: '5px 40px',
    marginBottom:'40px',
    fontWeight:'italic',
    fontSize:'20px',
    lineHeight:'32px',
    color: '$white',
    textTransform: 'capitalize',
  },

  strong:{
  
    padding: '0px 40px',
    marginTop:'-50px',
    flex:'1',
    
  }
  
} )

export const TestemonyBanner = styled('div', {
  marginTop:'40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'flex-start',
  alignItems:'center',
  backgroundColor:'$yellowact',
  width:'1100px',
  margin: 'auto',
  height: '560px',
  position: 'relative',
  overflow: 'hidden',
 
  gap: '20px',

  '&:first-child':{
    display: 'block',
    position: 'absolute',
    left:'500px',
    top:'10px',
    filter: 'opacity(50%)',
    zIndex:'1',

  },

 
  
})

export const TestemonyCard = styled('div', {

  display: 'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  color: '$firstline',
  backgroundColor:'$white',
  width:'500px',
  height: '360px',
  borderRadius: '50px',
  boxShadow:'10px 10px 80px rgba(103, 106, 117, 0.2)',



  img:{
    marginTop:'10px',
    
  },

  

})
