import { Container, LinkStyle, List, LoginButton} from "./styles";
import Logo from '../../assets/LogoEspanholComORoberto.svg'

import { SignIn } from 'phosphor-react'
import Link from 'next/link'

import Image from "next/image";

export function Header() {
  return (
    <Container >
      <Image src={Logo} alt="Logo" width={120} height={120}/>

      <List>
        <li><Link href={"/"} legacyBehavior><LinkStyle><p>HOME</p></LinkStyle></Link></li>
        
        <li><Link href={"/cursos"} legacyBehavior><LinkStyle><p>CURSOS</p></LinkStyle></Link></li>
        
        <li><Link href={"/traducoes"} legacyBehavior><LinkStyle><p>TRADUÇÕES</p></LinkStyle></Link></li>
        
        <li><Link href={"/contactos"} legacyBehavior><LinkStyle><p>CONTACTOS</p></LinkStyle></Link></li>
        
        <li><Link href={"/blog"} legacyBehavior><LinkStyle><p>BLOG</p></LinkStyle></Link></li>
        
        <li><Link href={"/sobre"} legacyBehavior><LinkStyle><p>SOBRE</p></LinkStyle></Link></li>
      </List>

        <Link href={"/login"} legacyBehavior>
      <LoginButton>
        <SignIn size={32} color="white" weight="fill"/>
        LOGIN
        </LoginButton>
        </Link>
    </Container>
    
    
  )
}