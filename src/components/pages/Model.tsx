import { Link, useLoaderData } from "react-router-dom"
import { Item } from "./Adidas"
import { PATH } from "../../routes/Router"
import styles from './../Site.module.css'


export const Model = () => {
    const { product } = useLoaderData() as { product: Item }
    if (!product) {
        return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>Модель не найдена</div>
            <Link to={PATH.adidas} className={styles.buttonLink}>Вернуться на главную страницу</Link>
        </div>)
    } else {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <h1>{product.model}</h1>
            <h2>{product.collection}</h2>
            <h3>{product.price}</h3>

            <img src={product.picture} alt={product.model} style={{ width: '700px', height: 'auto', marginBottom: '60px' }} />
        </div>
    )
}
}