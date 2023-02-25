import { styled } from "@stitches/react";



export const Container = styled('div', {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',

})

export const Banner = styled('div', {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    

    background:"linear-gradient(103.32deg, rgba(239, 189, 47, 0.123373) 10.59%, #EFBD2F 45.89%, rgba(239, 189, 47, 0) 112.13%);",
    width: '1366px',
    height: '413px',

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

export const Form = styled('form', {
    display: 'flex',
    paddingTop:'20px',
    marginTop:'20px',
    alignItems:'center',
    backgroundColor:'$blue',
    width: '1060px',
    height: '1000px',
    borderRadius:'50px',
    flexDirection:'column',

})

export const Input = styled('input', {
    display: 'flex', padding: '10px', flexWrap: 'wrap', gap: 15, alignItems: 'center', width:'671px', margin: '10px', borderRadius:'10px', border: '2px solid #272A35', background: '#d9d9d9'

   
})

export const Textarea = styled('textarea', {
    display: 'flex', padding: '10px', flexWrap: 'wrap', gap: 15, alignItems: 'center', width: '671px',height:'360px',borderRadius:'10px', border: '2px solid #272A35', background: '#d9d9d9', marginTop:'10px', 

   
})

 