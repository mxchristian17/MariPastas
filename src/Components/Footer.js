import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import WhatsappWidget from "./WhatsappWidget"

function Footer() {
    return (
        <div id="footer" className="bg-gray-200 absolute bottom-0  w-full">
            <div className="textoDorado inset-y-0  grid grid-cols-3 align-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex p-1 align-center my-auto">
                    <a href="mailto:maripastas@gmail.com" className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl'><FiMail/></a>
                    <a href="https://api.whatsapp.com/send?phone=5493467499337" className="mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl"><FaWhatsapp className='' /></a>
                    <a href="https://www.instagram.com/maripastas/" className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl'><FaInstagram/></a>
                    <a href="https://www.facebook.com/maripastas/" className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl'><FaFacebook/></a>
                </div>
                <h1 className="logomari text-4xl xl:text-6xl text-slate-600">Mari</h1>
                <div className="my-auto">
                    <ul className="text-xs xl:text-sm text-right mr-2 xl:mr-4 ">
                        <li>Blvd. San Martín 53</li>
                        <li>Arteaga, Santa Fe</li>
                        
                    </ul>                    
                </div>
            </div>
            <p className="fondoDorado text-xs xl:text-md  text-white">Copyright 2020 Mari pastas. Todos los derechos reservados</p>
            <WhatsappWidget/>
        </div>
    )
}

export default Footer