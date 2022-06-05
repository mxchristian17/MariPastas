import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Footer() {
    return (
        <div id="footer" className="bg-gray-200 relative bottom-0 w-full">
            <div className="textoDorado inset-y-0  grid grid-cols-3 align-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex p-1 align-center my-auto">
                    <a href="mailto:lucas@gmail.com"><FiMail className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl' /></a>
                    <a href="https://api.whatsapp.com/send?phone=5493413010732"><FaWhatsapp className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl' /></a>
                    <a href="https://www.instagram.com/piattipastas/"><FaInstagram className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl' /></a>
                    <a href="https://www.facebook.com//"><FaFacebook className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-2xl' /></a>
                </div>
                <h1 className="logoPiatti text-4xl xl:text-6xl text-slate-600">Piatti</h1>
                <div className="my-auto">
                    <ul className="text-xs xl:text-sm text-right mr-2 xl:mr-4 ">
                        <li>Blvd. San Martín 53</li>
                        <li>Arteaga, Santa Fe</li>
                        
                    </ul>                    
                </div>
            </div>
            <p className="fondoDorado text-xs xl:text-md  text-white">Copyright 2020 Piatti pastas. Todos los derechos reservados</p>
        </div>
    )
}

export default Footer