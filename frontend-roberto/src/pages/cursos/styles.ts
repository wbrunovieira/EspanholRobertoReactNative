import { styled } from "@stitches/react";


export const Container = styled('div',{

    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    margin: '0 auto',
    flexDirection:'column',
    width: '100%',
    height: '100vah',
   

    h1:{
        fontFamily:'Poppins',
        fontWeight:'700',
        fontSize:'64px',
        color:'$white',
        margin: '0 80px',
        letterSpacing:'5px',
        textTransform: 'uppercase',

        '&::after':{
            content: "''",
            display: 'block',
            height: '4px',
            width: '280px',
            background: '$white',
            borderRadius:'5px',
            marginTop:'8px',
    
        }

    },


})

export const WelcomeBannerContainer = styled('div', {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    margin: '0 auto',
    width: '100%',
    height: '300',
    backgroundColor:'$blue',
    padding: '60px',

    '&::after': {
        transform: 'rotate(90deg)',
        
      },

    h1:{
        fontFamily:'Poppins',
        fontWeight:'700',
        fontSize:'32px',
        color:'$white',
        margin: '0 80px',
        letterSpacing:'5px',
        textTransform: 'uppercase',

        '&::after':{
            content: "''",
            display: 'block',
            height: '4px',
            width: '160px',
            background: '$white',
            borderRadius:'5px',
            marginTop:'8px',
    
        }

    },

})

export const BegginerTitle = styled('div', {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    margin: '0 auto',
    padding: '50px',

    h2:{

        fontFamily:'Poppins',
        fontWeight:'700',
        fontSize:'32px',
        color:'$firstline',
        
        letterSpacing:'5px',
        textTransform: 'uppercase',
        paddingLeft:'10px',

    },

})


export const BegginerBanner = styled('div', {

    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    margin: '0 auto',
    width: '1056px',
    height: '300',
    backgroundColor:'$blue',
    padding: '60px',   
    borderRadius:'50px', 
    position: 'relative',
    flexDirection: 'column',

    '&::after':{
        content: "''",
        display: 'block',
        height: '4px',
        width: '860px',
        background: '$blue',
        borderRadius:'5px',
        top:'300px',
        position: 'absolute',

    }


})