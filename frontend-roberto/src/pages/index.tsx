
import { Header } from "../components/Header";
import { AboutButton, BannerMotivation, BannerRoberto, DescriptionAbout, HomeContainer, TextMotivation, Title } from "../styles/pages/home";
import Image from "next/image";

import bannerHome from '../assets/banner-home.png'
import CurveLine from '../assets/CurveLine.svg'
import iconBookin from '../assets/IconBooks.svg'
import iconBookOut from '../assets/IconsBooksout.svg'

import bannerForPic from '../assets/banner-roberto.svg'

import fotoRoberto from '../assets/fotoRoberto.png'

import SpainKeyboard from '../assets/TecladoEspanha.png'


export default function Home() {
  return (
    <>
    <HomeContainer>

      <Image src={bannerHome} alt="Banner Home" />
      <Title>Home</Title>

      <BannerRoberto>

        <Image src={iconBookin} alt="icon books" />
        <Image src={CurveLine} alt="linha curva" />

        <Image src={fotoRoberto} alt="foto do Roberto" width={200} height={200} />
        <Image src={iconBookOut} alt="icon books" />

      </BannerRoberto>      
        <Image src={bannerForPic} alt=""/>
        <DescriptionAbout>
          <p> - Professor Nativo <br/>
           - Mais de 20 anos <br/>
                de Experiência <br/>
          - Licenciado em Letras
          </p>
          <AboutButton>
            SAIBA MAIS
          </AboutButton>
        </DescriptionAbout>
    
         <BannerMotivation>
            <Image src={SpainKeyboard} alt="teclado imagem" width={566} height={377}/>
            <TextMotivation>
              <div>
                <p>“Aprender um novo idioma é ter mais uma janela para olhar para o Mundo.”
                </p>
                <strong>Provébio chinês</strong>

              </div>

            </TextMotivation>
         </BannerMotivation>
          

     
    </HomeContainer>
    
    </>
  )
}
