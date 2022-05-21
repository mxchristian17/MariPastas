function Product({e}) {
    return (
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
                    <h3 className="text-xl text-center text-gray-700">
                        <a href={e.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {e.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{e.title}</p>
                </div>
                
            </div>
        </div>
    )
}
export default Product