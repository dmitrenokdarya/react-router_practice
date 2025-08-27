import { ReactNode } from "react";

type ProtectedRoutePropsType = {
    children: ReactNode
}

export const ProtectedRoute = ({children} : ProtectedRoutePropsType):any => {
    const logged = true
    if (!logged) {
        throw new Error('Ошибка')
    } else {
        children
    }
}