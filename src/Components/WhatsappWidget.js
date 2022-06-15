import { FaWhatsapp } from "react-icons/fa"

const WhatsappWidget = () => {
  const whatsappLink = () => { window.open('https://api.whatsapp.com/send?phone=5493467499337', '_blank') }
  return (
    <div onClick={()=>whatsappLink()} className="absolute -top-16 right-10 z-10 p-1 bg-[#D6B36A] rounded-full cursor-pointer">
        <FaWhatsapp className='m-1 text-4xl text-white hover:text-black focus:outline-none'/>
    </div>
  )
}

export default WhatsappWidget