import Image from 'next/image'

export default function Result(){
    return (
        <>
        <div className='flex justify-center mt-16 mb-40 flex-wrap'>  
            <div className='mr-20'>
                <h1 className='text-4xl font-bold text-gray-800'>PARABÉNS</h1>
                <p className='text-3xl font-normal text-gray-800'>Você valoriza a ascensão profisssional!</p>
                <div className='mt-6 border-2 border-gray-300 pt-6 pl-10 pr-16 pb-16'>
                    <h2 className='text-yellow-400 font-semibold text-2xl'>Veja as profissões que são a sua cara:</h2>
                    <ul className='mt-5 text-lg'>
                        <li>Lorem Ipsum dolor sit amet consectur.</li>
                        <li>Tellus aliquam adipiscing sed facilisi pellentesque pallentesque</li>
                        <li>At aliquet. Augue arcu cursus pharetra ultrices ante.</li>
                        <li>Feugiat nullam mauris mattis faucibus faucibus quam purus in dolor</li>
                        <li>Lacus interdum scelerisque sollicitudin sed dolor.</li>
                    </ul>
                </div>
            </div>
            <Image width={447} height={405} src="/student.svg"  alt="Estudante acenando" className='bg-contain h-96 w-96'/>
        </div>
            <p className='text-center font-semibold mb-4'>Lorem ipsum dolor sit imperdiet</p>
        </>
    )
}