import Head from 'next/head'
import Image from 'next/image'

export default function Header(){
    return(
        <header>
            <Image width={891} height={174} src="/logo-1.svg" className='bg-contain mx-auto'/>
        </header>
    )
}