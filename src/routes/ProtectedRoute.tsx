import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "./Router";

type ProtectedRoutePropsType = {
    children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRoutePropsType) => {
    const logged = true; 
    if (!logged) {
        return <Navigate to={PATH.error} />;
    } else {
        return children;
    }
    
}