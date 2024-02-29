import Image from "next/image"


export default function RedesSociales(){

    return(
        <div className='mx-24 flex flex-col w-[331px]'>
        <span className='text-xl font-normal justify-center not-italic leading-normal'>Síguenos en redes sociales</span>
        <div className='flex flex-row mt-4 ml-12'>
                <a href='https://www.facebook.com/tandemindustrial.cl' target='_blank'>
                    <Image
                        src={'/icons/facebook.svg'}
                        alt='Facebook Icon'
                        width={40}
                        height={40}
                        className='cursor-pointer me-2 hover:opacity-80 transition duration-75'/>
                </a>
                <a href='https://www.linkedin.com/company/tandem-industrial' target='_blank'>
                    <Image
                        src={'/icons/linkedin.svg'}
                        alt='Linkedin Icon'
                        width={40}
                        height={40}
                        className='cursor-pointer me-2 hover:opacity-80 transition duration-75'/>
                </a>
                <a href='https://www.instagram.com/tandem.industrial' target='_blank'>
                    <Image
                        src={'/icons/instagram.svg'}
                        alt='Instagram Icon'
                        width={40}
                        height={40}
                        className='cursor-pointer hover:opacity-80 transition duration-75'/>
                </a>
        </div>
    
        
    </div>
    )
     
     }