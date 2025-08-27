import { useLoaderData } from "react-router-dom"
import { Item } from "./Adidas"
import styles from "./../Site.module.css"


export const Model = () => {
    const { product } = useLoaderData() as { product: Item }
    return (
        <div className={styles.modelContainer}>


            <h1 className={styles.modelTitle}>{product.model}</h1>
            <h2 className={styles.modelCollection}>{product.collection}</h2>
            <h3 className={styles.modelPrice}>{product.price}</h3>

            <img src={product.picture} alt={product.model} className={styles.modelImage}/>
        </div>
    )
}
