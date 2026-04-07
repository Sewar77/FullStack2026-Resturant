import { MenuContext } from "../Context/MenuContext.jsx";
import { useContext, useEffect } from "react"
export function useMenu() {
    const context = useContext(MenuContext)
    if (!context) {
        return;
    }
    useEffect(() => {
        context.menu
    }, [])
    return context
}
