import { Link } from "react-router-dom"
import { FaRegTimesCircle } from "react-icons/fa"

function ProductDetail({ e: { title, ingredientes, imageSrc, imageAlt, receta } }) {
    return (
        <div className="flex justify-between items-center relative container md:px-20 mt-10 mb-20 xl:h-72 min-w-72">
            <div className="group flex flex-row flex-wrap relative">
                <div className="mb-7 md:mb-0 xl:w-1/3 xl:mx-0 mx-5 flex m-auto justify-around bg-gray-200 aspect-w-1 aspect-h-1 rounded-[55px] overflow-hidden group-hover:opacity-75 lg:h-full  lg:aspect-none  shadow-lg shadow-slate-500">
                <Link to='/products' className="absolute btn  text-xl xl:text-3xl bg-slate-500 my-auto  rounded-full text-white right-4 top-1" ><FaRegTimesCircle/></Link>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full "
                    />
                </div>
                <div className="my-2 xl:w-2/3 flex justify-between">
                    <div className="w-full ml-4 flex flex-col justify-around text-left">
                        <div className="">
                            <h3 className="text-xl textoShadow font-light textoDorado">{title}</h3>
                            <p className="text-sm font-light text-stone-600 ml-6 mr-2">{receta}</p>
                        </div>
                        <div className="mt-1">
                            <h4 className="textoDorado text-xl font-light textoShadow" >Ingredientes</h4>
                            <p className="text-sm font-light text-stone-600 mt-1 ml-6">{ingredientes}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetail