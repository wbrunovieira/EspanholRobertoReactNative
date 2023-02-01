import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    flexDirection: 'column',
    backgroundColor:'$gray100'

})

export const Title = styled('h1', {
color: '$firstline',
fontSize:'64px',
paddingTop: '40px',
position:'relative',


    '&::after': {
      content: "''",
      height: '2px',
      position: 'absolute',
      width: '210px',
      background: '$firstline',
      display: 'block',
      float: 'right',
      marginRight:'40px',
      margin: '0 auto',
    },

    



})