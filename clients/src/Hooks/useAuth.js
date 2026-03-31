import { UserContext } from "../Context/UserContext.jsx"
import { useContext, useEffect } from "react"
export function useAuth() {
    const context = useContext(UserContext)
    console.log(context)
    if (!context) {
        return;
    }
    useEffect(() => {
        context.allUsers
    }, [])
    return context
}
