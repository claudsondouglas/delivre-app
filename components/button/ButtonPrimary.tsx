import { ReactNode } from "react"

export default function ButtonPrimary({ children, textPosition = 'left' } : { children: ReactNode, textPosition?: string }) {
    return (
        <span className="flex-1" style={{
            textAlign: textPosition as any
        }}>
            { children }
        </span>
    )
}