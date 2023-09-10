import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (<>
      <footer className="bg-yellow-400 h-16 w-screen py-1">
        <Link href="#"><Image src="/whatsapp_button.svg" width={190} height={56} className="mx-auto" alt="Whatsapp Código Kid Itumbiara"/></Link>
      </footer>
    </>)
}