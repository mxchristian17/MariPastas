import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div id="footer">
            <div className="textoDorado inset-y-0  grid grid-cols-3 align-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex p-1 align-center my-auto">
                    <Link to="#"><FiMail className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-3xl' /></Link>
                    <Link to="#"><FaWhatsapp className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-3xl' /></Link>
                    <Link to="#"><FaInstagram className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-3xl' /></Link>
                    <Link to="#"><FaFacebook className='mx-2 xl:mx-4 text-lg hover:text-stone-600 focus:outline-none xl:text-3xl' /></Link>
                </div>
                <h1 className="logoPiatti text-5xl xl:text-7xl text-slate-600">Piatti</h1>
                <div>
                    <ul className="text-xs xl:text-sm">
                        <li>asdas</li>
                        <li>adasdasd</li>
                        <li>asdasdas</li>
                    </ul>                    
                </div>
            </div>
            <p className="fondoDorado text-xs xl:text-lg  text-white">Copyright 2020 Piatti pastas. Todos los derechos reservados</p>
        </div>
    )
}

export default Footer