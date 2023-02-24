import Image from 'next/image'
import { BegginerBanner, BegginerTitle, Container, WelcomeBannerContainer} from './styles'


import BegginerrIcon from '../../assets/beginnerIcon.svg'
import IntermediateIcon from '../../assets/intermediateIcon.svg'
import AdvancedIcon from '../../assets/advancedIcon.svg'
import BusinessIcon from '../../assets/businessIcon.svg'
import TravelIcon from '../../assets/travelIcon.svg'

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

            <BegginerTitle>
                <Image src={IntermediateIcon} alt="icone intermediario"/>
                <h2>INTERMEDIÁRIO</h2>
            </BegginerTitle>
            <BegginerBanner>
                <p>O aluno srerer dsfsd dfsagasd g gragasdfgad fsgafd gasfd gasgf

gadfsgadsfgafdgadgadfg asdfgadfsgdsfg sgfsd gfadsffasdfsdafasdfasdfsd

fasfasdfasdfasdfasdfas asdgf agsd gafdg   fgasdgasdgad f asg gas gasd g sd</p>

                <ButtonMoreAbout />
            </BegginerBanner>

            <BegginerTitle>
                <Image src={AdvancedIcon} alt="icone avançado"/>
                <h2>AVANÇADO</h2>
            </BegginerTitle>
            <BegginerBanner>
                <p>O aluno srerer dsfsd dfsagasd g gragasdfgad fsgafd gasfd gasgf

gadfsgadsfgafdgadgadfg asdfgadfsgdsfg sgfsd gfadsffasdfsdafasdfasdfsd

fasfasdfasdfasdfasdfas asdgf agsd gafdg   fgasdgasdgad f asg gas gasd g sd</p>

                <ButtonMoreAbout />
            </BegginerBanner>

            <BegginerTitle>
                <Image src={BusinessIcon} alt="icone negócios"/>
                <h2>NEGÓCIOS</h2>
            </BegginerTitle>
            <BegginerBanner>
                <p>O aluno srerer dsfsd dfsagasd g gragasdfgad fsgafd gasfd gasgf

gadfsgadsfgafdgadgadfg asdfgadfsgdsfg sgfsd gfadsffasdfsdafasdfasdfsd

fasfasdfasdfasdfasdfas asdgf agsd gafdg   fgasdgasdgad f asg gas gasd g sd</p>

                <ButtonMoreAbout />
            </BegginerBanner>

            <BegginerTitle>
                <Image src={TravelIcon} alt="icone viagens"/>
                <h2>VIAGEM</h2>
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