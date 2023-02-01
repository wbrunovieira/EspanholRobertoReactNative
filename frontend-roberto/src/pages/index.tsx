
import { Header } from "../components/Header";
import { HomeContainer, Title } from "../styles/pages/home";

import bannerHome from '../assets/banner-home.png'
import Image from "next/image";


export default function Home() {
  return (
    <>
    <HomeContainer>

      <Image src={bannerHome} alt="Banner Home" />
      <Title>Home</Title>
     
    </HomeContainer>
    
    </>
  )
}
