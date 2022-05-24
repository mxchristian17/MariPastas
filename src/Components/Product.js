import { Link } from "react-router-dom"


function Product({ e }) {
    return (
        <Link to={`/products/${e.id}`}>
            <div className="group relative">
                <div className="w-2/3 h-1/3 flex m-auto justify-around bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-2/3  lg:aspect-none">
                    <img
                        src={e.imageSrc}
                        alt={e.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div className="w-full">
                        <h3 className="text-xl text-center text-gray-700 font-light">{e.title}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Product