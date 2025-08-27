import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { App } from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas, Item } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import styles from './../components/Site.module.css'

export const PATH = {
    adidas: "/adidas",
    puma: "/puma",
    abibas: "/abibas",
    prices: "/prices",
    error404: "*",
    main: "/",
    model: "/:brand/:id"
} as const


async function modelLoader({ params }: any) {
    const { brand, id } = params;
    const lowerCaseBrand = brand.toLowerCase()

    try {
        const module = await import(`../components/pages/${brand}`);
        const brandData = (module as any)[`${lowerCaseBrand}Arr`];

        if (!brandData) {
            throw new Response("Brand not found", { status: 404 });
        }

        const product = brandData.find((i: Item) => i.id === parseInt(id));

        if (!product) {
            throw new Response("Product not found", { status: 404 });
        }

        return { product };

    } catch (error) {
        console.error("Loader error:", error);
        throw new Response("Not Found", { status: 404 });
    }
}

export const ModelError = () => {
   
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>Модель не найдена</div>
            <Link to={PATH.adidas} className={styles.buttonLink}>
                Вернуться на главную страницу
            </Link>
        </div>
    );
};


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PATH.adidas,
                element: <Adidas />,
            },
            {
                path: PATH.puma,
                element: <Puma />,
            },
            {
                path: PATH.abibas,
                element: <Abibas />,
            },
            {
                path: PATH.prices,
                element: <Prices />,
            },
            {
                path: PATH.main,
                element: <Navigate to={PATH.adidas} />,
            },
            {
                path: PATH.model,
                element: <Model />,
                loader: modelLoader,
                errorElement: <ModelError />
            },
        ]
    }
])
