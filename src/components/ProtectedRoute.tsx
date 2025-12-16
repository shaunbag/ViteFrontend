import type { ReactElement } from "react";
import { useUserStore } from "../store";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    element: ReactElement
}   
export default function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { jwt } = useUserStore();

    if(jwt){
        return element;
    } else {
        return < Navigate to="/login" />
    }

}