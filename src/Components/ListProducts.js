import Product from "./Product"
import { useParams } from "react-router-dom"
import ProductDetail from "./ProductDetail"


const products = [
    {
        id: 1,
        title: "Tallarines",
        receta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure expedita, ipsam, perferendis maiores et quibusdam officiis earum labore libero illo.",
        ingredientes: "asLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iuredasd",
        imageSrc: "https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg",
        imageAlt: "alt"
    },
    {
        id: 2,
        title: "Fetuccini",
        receta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure expedita, ipsam, perferendis maiores et quibusdam officiis earum labore libero illo.",
        ingredientes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure",
        imageSrc: "https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg",
        imageAlt: "alt"
    },
    {
        id: 3,
        title: "Espinaca",
        receta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure expedita, ipsam, perferendis maiores et quibusdam officiis earum labore libero illo.",
        ingredientes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure",
        imageSrc: "https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg",
        imageAlt: "alt"
    }
]

function ListProducts() {
    const { id } = useParams()    
    if (id) {
        return (
            <div className="flex m-12">
                <ProductDetail key={id} e={products.find(product=>product.id===Number(id))} />
            </div>
        )
    }
    return (
        <div className="grid xl:grid-cols-3 my-10">
            {products.map(e => <Product key={e.id} e={e} />)}
        </div>
    )
}

export default ListProducts