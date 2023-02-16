import { styled } from "@stitches/react";


export const Container = styled('div',{

    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    margin: '0 auto',
    width: '100%',
    height: '400px',
    backgroundColor:'$blue',

    '&::after': {
        transform: 'rotate(90deg)',
        
      },

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

    img:{

      



       

    }

})