import { Link } from "react-router-dom"
import { FaRegTimesCircle } from "react-icons/fa"

function ProductDetail({ e: { title, ingredientes, imageSrc, imageAlt, receta } }) {
    return (
        <div className="flex justify-between relative container md:px-10 my-12">
            <div className="group flex flex-row flex-wrap relative">
                <div className="xl:w-1/3 xl:mx-0 mx-5 flex m-auto justify-around bg-gray-200 aspect-w-1 aspect-h-1 rounded-[55px] overflow-hidden group-hover:opacity-75 lg:h-full  lg:aspect-none  shadow-lg shadow-slate-500">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full "
                    />
                </div>
                <div className="my-2 xl:w-2/3 flex justify-between">
                    <div className="w-full ml-4 flex flex-col justify-around text-left">
                        <h3 className="text-xl text-gray-700">{title} </h3>
                        <p className="text-sm mt-1 ml-6">{receta}</p>
                        <div className="mt-4">
                            <h4>Ingredientes</h4>
                            <p className="text-sm mt-1 ml-6">{ingredientes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/products' className="absolute btn  text-lg xl:text-3xl bg-slate-500 my-auto  rounded-full text-white right-1 top-1" ><FaRegTimesCircle/></Link>
        </div>
    )
}

export default ProductDetail