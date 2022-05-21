import Product from "./Product"

const products=[
    {
        id:1,
        title: "Tallarines",
        receta: "asddas",
        desciption: "asdasd",
        imageSrc:"https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg",
        imageAlt:"alt"
    },
    {
        id:2,
        title: "Fetuccini",
        receta: "asddas",
        desciption: "asdasd",
        imageSrc:"https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg",
        imageAlt:"alt"
    },
    {
        id:3,
        title: "Espinaca",
        receta: "asddas",
        desciption: "asdasd",
        imageSrc:"https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg",
        imageAlt:"alt"
    }
]

function ListProducts(){
    return(
        <div className="grid grid-cols-3 my-10">
            {products.map(e=><Product key={e.id} e={e}/>)}
        </div>
    )
}

export default ListProducts