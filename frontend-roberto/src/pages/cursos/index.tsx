import Image from 'next/image'
import { Container} from './styles'

import IconBooks from '../../assets/IconsBooksout.svg'

export default function Cursos() {
    return(
        <Container>
            <Image src={IconBooks} alt="livros"/>


            <h1>Cursos</h1>

            <Image src={IconBooks} alt="livros"/>
        </Container>
    )
}