import Image from 'next/image'
import logo from '../../public/images/logo.svg'

export function Logo(){
    return(
        <div>
            <Image src={logo}
            alt="Logo"
            width={200}
            height={200}/>
        </div>
    )
}    