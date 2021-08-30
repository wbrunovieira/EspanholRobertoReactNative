import Head from 'next/head'
import { Logo } from '../components/Logo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>Home - Espanhol Com o Roberto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display:'flex',alignContent: 'center', justifyItems:'center', maxWidth:400, flexDirection:'column'}}>
      <Logo />
        <div >
          <h1 style={{flex:'1', alignContent: 'center', justifyItems:'center', color:'#555'}}>Em Construção</h1>
        </div>

        </div>     

     
    </div>
  )
}
