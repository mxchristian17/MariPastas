import Product from "./Product"
import { useParams } from "react-router-dom"
import ProductDetail from "./ProductDetail"


const products = [
    {
        id: 1,
        title: "Tallarines con epsinaca",
        receta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure expedita, ipsam, perferendis maiores et quibusdam officiis earum labore libero illo.",
        ingredientes: "Harina de trigo enriquecida según Ley 25630 (adicionada con hierro (30 mg/kg), ácido fólico (2,2 mg/kg), tiamina (B1) (6,3 mg/kg, riboflavina (B2) (1,3 mg/kg, niacina (13 mg/kg)), Agua potable, espinaca deshidratada, sal, huevo",
        imageSrc: "/assets/Espinaca.png",
        imageAlt: "alt"
    },
    {
        id: 2,
        title: "Fettuccine al huevo",
        receta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure expedita, ipsam, perferendis maiores et quibusdam officiis earum labore libero illo.",
        ingredientes: "Harina de trigo enriquecida según Ley 25630 (adicionada con hierro (30 mg/kg), ácido fólico (2,2 mg/kg), tiamina (B1) (6,3 mg/kg, riboflavina (B2) (1,3 mg/kg, niacina (13 mg/kg)), Agua potable, huevo, sal, colorante: cúrcuma INS 100 i.",
        imageSrc: "/assets/Fetuccini.png",
        imageAlt: "alt"
    },
    {
        id: 3,
        title: "Tallarines al huevo",
        receta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea qui, quidem excepturi rerum totam molestias repellat at iure expedita, ipsam, perferendis maiores et quibusdam officiis earum labore libero illo.",
        ingredientes: "Harina de trigo enriquecida según Ley 25630 (adicionada con hierro (30 mg/kg), ácido fólico (2,2 mg/kg), tiamina (B1) (6,3 mg/kg, riboflavina (B2) (1,3 mg/kg, niacina (13 mg/kg)), Agua potable, huevo, sal, colorante: cúrcuma INS 100 i.",
        imageSrc: "/assets/Tallarines.png",
        imageAlt: "alt"
    }
]

function ListProducts() {
    const { id } = useParams()
    if (id) {
        return (
            <div className="flex-col w-full">
                <h1 className="textoShadow text-4xl md:text-5xl my-10 font-light textoDorado">Nuestro Productos</h1>
                <div className="d-flex w-full justify-between">
                    <ProductDetail key={id} e={products.find(product => product.id === Number(id))} />
                </div>
            </div>
        )
    }
    return (
        <div className="">
            <h1 className="textoShadow text-4xl md:text-5xl my-10 font-light textoDorado">Nuestro Productos</h1>
            <div className="grid xl:grid-cols-3 mb-8">
                {products.map(e => <Product key={e.id} e={e} />)}
            </div>
        </div>
    )
}

export default ListProducts