import { ReactNode } from "react"

export default function ButtonRight({ children } : { children: ReactNode }) {
    return (
        <span className="w-auto">
            { children }
        </span>
    )
}