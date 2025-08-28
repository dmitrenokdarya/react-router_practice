import { createHashRouter, Link, Navigate } from "react-router-dom";
import { App } from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas, adidasArr } from "../components/pages/Adidas";
import { Puma, pumaArr } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import styles from './../components/Site.module.css'
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const PATH = {
    error: "/error",
    adidas: "/adidas",
    puma: "/puma",
    abibas: "/abibas",
    prices: "/prices",
    // error404: "*",
    main: "/",
    model: "/:brand/:id",
    protectedPage: "/protectedPage",
} as const


async function modelLoader({ params }: any) {
    const { brand, id } = params;
    const brandLower = brand.toLowerCase();

    try {
        let product;

        if (brandLower === 'adidas') {
            product = adidasArr.find(item => item.id === parseInt(id));
        }
        else if (brandLower === 'puma') {
            product = pumaArr.find(item => item.id === parseInt(id));
        }
        else {
            throw new Response("Brand not found", { status: 404 });
        }

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



export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Navigate to={PATH.error} />,
        children: [
            {
                path: PATH.error,
                element: <Error404 />,
            },
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
                path: PATH.protectedPage,
                element: (
                    <ProtectedRoute>
                        <ProtectedPage />
                    </ProtectedRoute>
                ),
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
