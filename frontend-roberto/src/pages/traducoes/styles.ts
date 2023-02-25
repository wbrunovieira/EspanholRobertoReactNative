import { styled } from "@stitches/react";
import path from "path";

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
        // color:'$white',
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

export const Banner = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    position: 'relative',

    h1: {
        color: '$white',
        position: 'absolute',
        top: '150px',
        left: '350px',
    }
})

export const DocumentsBox = styled('div', {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    marginTop:'20px',

})

export const Documents = styled('div', {
    display: 'flex',
    backgroundColor: '$yellowact',
    flexDirection:'column',
    width: '590px',
    height: '900px',

    variants: {
        color: {
          yellow: {
            backgroundColor: '$yellowact',
            color: '$gray900',
           
          },
          blue: {
            backgroundColor: '$blue',
            color: '$white'
           
          },
        },
      },

    p: {
        
        fontSize:'20px',
        padding: '60px'
    }

})
export const DocTitleBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',

    variants: {
        color: {
          yellow: {
            color: '$gray900',
            svg: {
                fill: '$blue',
             }
           
          },
          blue: {
            
            color: '$white',
           img: {
               fill: '#fff',
            }
        
           
          },
        },
      },
   
    h2: {
        paddingRight: '15px',
        
    },

    img: {
        paddingTop: '15px'
    }

   
    
})