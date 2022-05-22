import { Link } from "react-router-dom"

function ProductDetail({ e: { title, ingredientes, imageSrc, imageAlt, receta } }) {
    return (
        <div className="relative container w-full m-auto">
            <div className="group flex flex-row relative">
                <div className="w-2/3 h-1/3 flex m-auto justify-around bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-2/3  lg:aspect-none">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div className="w-full ml-4 flex flex-col justify-around text-left">
                        <h3 className="text-xl text-gray-700">{title} </h3>
                        <p className="ml-6">{receta}</p>
                        <div>
                            <h4>Ingredientes</h4>
                            <p className="ml-6">{ingredientes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/products' className="absolute btn bg-slate-500 py-2 px-8 rounded-md text-white right-1 top-2" >Cerrar</Link>
        </div>
    )
}

export default ProductDetail