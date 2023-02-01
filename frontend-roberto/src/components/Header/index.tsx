import { Container, Link, List, LoginButton} from "./styles";
import Logo from '../../assets/LogoEspanholComORoberto.svg'

import Image from "next/image";

export function Header() {
  return (
    <Container >
      <Image src={Logo} alt="Logo" width={120} height={120}/>

      <List>
        <li><Link><p>HOME</p></Link></li>
        
        <li><Link><p>CURSOS</p></Link></li>
        
        <li><Link><p>TRADUÇÕES</p></Link></li>
        
        <li><Link><p>CONTACTOS</p></Link></li>
        
        <li><Link><p>BLOG</p></Link></li>
        
        <li><Link><p>SOBRE</p></Link></li>
      </List>

      <LoginButton>LOGIN</LoginButton>
    </Container>
    
    
  )
}