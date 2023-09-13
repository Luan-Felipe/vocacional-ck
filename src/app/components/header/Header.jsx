import Image from 'next/image'

export default function Header(){
    return(
        <header className="bg-white mt-2 mb-1">
            <Image width={891}  height={174} src="/logo-1.svg" className='bg-contain mx-auto' alt='Código Kid logo'/>
        </header>
    )
}