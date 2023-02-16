import Image from 'next/image'
import { BegginerBanner, BegginerTitle, Container, WelcomeBannerContainer} from './styles'
import BegginerrIcon from '../../assets/beginnerIcon.svg'

import IconBooks from '../../assets/IconsBooksout.svg'
import ButtonMoreAbout from '@/src/components/ButtonMoreAbout'

export default function Cursos() {
    return(
        <Container>
           <WelcomeBannerContainer>
                <Image src={IconBooks} alt="livros"/>
                    <h1>Cursos</h1>
                <Image src={IconBooks} alt="livros"/>
           </WelcomeBannerContainer>
            
            <BegginerTitle>
                <Image src={BegginerrIcon} alt="icone iniciante"/>
                <h2>INICIANTE</h2>
            </BegginerTitle>
            <BegginerBanner>
                <p>O aluno srerer dsfsd dfsagasd g gragasdfgad fsgafd gasfd gasgf

gadfsgadsfgafdgadgadfg asdfgadfsgdsfg sgfsd gfadsffasdfsdafasdfasdfsd

fasfasdfasdfasdfasdfas asdgf agsd gafdg   fgasdgasdgad f asg gas gasd g sd</p>

                <ButtonMoreAbout />
            </BegginerBanner>


        </Container>
    )
}