import { Link, useParams } from "react-router-dom"
import { Item } from "./Adidas"
import { PATH } from "../../App"
import styles from './../Site.module.css';

type ModelPropsType = {
    arr: Item[]
}


export const Model = ({ arr }: ModelPropsType) => {
    const params = useParams()
    const ourModel = arr.find((a) => a.id === Number(params.id))
    if (!ourModel) {
        return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>Модель не найдена</div>
            <Link to={PATH.adidas} className={styles.buttonLink}>Вернуться на главную страницу</Link>
        </div>)
    } else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                <h1>{ourModel.model}</h1>
                <h2>{ourModel.collection}</h2>
                <h3>{ourModel.price}</h3>

                <img src={ourModel.picture} alt={ourModel.model} style={{ width: '700px', height: 'auto', marginBottom: '60px' }} />
            </div>
        )
    }
}