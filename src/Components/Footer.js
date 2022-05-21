import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Footer() {
    return (
        <div id="footer">
            <div className="textoDorado inset-y-0  flex justify-between align-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex p-1 align-center my-auto hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                    <FiMail className='mx-2 text-2xl' />
                    <FaWhatsapp className='mx-2 text-2xl' />
                    <FaInstagram className='mx-2 text-2xl' />
                    <FaFacebook className='mx-2 text-2xl' />
                </div>
                <h1 className="logoPiatti text-6xl text-slate-600">Piatti</h1>
                <div>
                    <p>algo</p>
                </div>
            </div>
            <h1 className="fondoDorado text-white">Copyright 2020 Piatti pastas. Todos los derechos reservados</h1>
        </div>
    )
}

export default Footer