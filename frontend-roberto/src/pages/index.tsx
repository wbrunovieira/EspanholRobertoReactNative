
import { Header } from "../components/Header";
import { AboutButton, BannerRoberto, DescriptionAbout, HomeContainer, Title } from "../styles/pages/home";

import bannerHome from '../assets/banner-home.png'
import CurveLine from '../assets/CurveLine.svg'
import iconBookin from '../assets/IconBooks.svg'
import iconBookOut from '../assets/IconsBooksout.svg'

import bannerForPic from '../assets/banner-roberto.svg'

import fotoRoberto from '../assets/fotoRoberto.png'
import Image from "next/image";


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
                de Experiencia <br/>
          - Licenciado em Letras
          </p>
          <AboutButton>
            SAIBA MAIS
          </AboutButton>
        </DescriptionAbout>
    
         
          

     
    </HomeContainer>
    
    </>
  )
}
