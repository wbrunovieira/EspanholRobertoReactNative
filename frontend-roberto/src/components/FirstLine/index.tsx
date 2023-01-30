import { Container, TextoWhatis, Whatapp } from "./styles";
import WhasappIMG from '../../assets/whatappIcon.svg'
import Image from "next/image";
export function FirstLine() {
  return (
    
      <Container>

        <TextoWhatis>Cursos de Espanhol Online com aulas aovivo</TextoWhatis>
          <Whatapp href="https://wa.me/351936492123"> 
            <Image src={WhasappIMG} alt="Imagem Whatsapp"/>
            <TextoWhatis>(+351) 936 492 123</TextoWhatis>
        </Whatapp>
      </Container>
    
  )
}