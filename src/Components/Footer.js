import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Footer() {
    return (
        <div id="footer">
            <div className="textoDorado inset-y-0  flex justify-between align-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex p-1 align-center my-auto">
                    <FiMail className='mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-4xl' />
                    <FaWhatsapp className='mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-4xl' />
                    <FaInstagram className='mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-4xl' />
                    <FaFacebook className='mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-4xl' />
                </div>
                <h1 className="logoPiatti text-4xl xl:text-6xl text-slate-600">Piatti</h1>
                <div>
                    <p>algo</p>
                </div>
            </div>
            <p className="fondoDorado text-sm xl:text-lg  text-white">Copyright 2020 Piatti pastas. Todos los derechos reservados</p>
        </div>
    )
}

export default Footer