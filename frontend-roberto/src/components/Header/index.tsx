import { Container, Link, List, LoginButton} from "./styles";
import Logo from '../../assets/LogoEspanholComORoberto.svg'

import Image from "next/image";

export function Header() {
  return (
    <Container >
      <Image src={Logo} alt="Logo" width={200} height={200}/>

      <List>
        <li><Link>HOME</Link></li>
        <li>|</li>
        <li><Link>CURSOS</Link></li>
        <li>|</li>
        <li><Link>TRADUÇÕES</Link></li>
        <li>|</li>
        <li><Link>CONTACTOS</Link></li>
        <li>|</li>
        <li><Link>BLOG</Link></li>
        <li>|</li>
        <li><Link>SOBRE</Link></li>
      </List>

      <LoginButton>LOGIN</LoginButton>
    </Container>
    
    
  )
}