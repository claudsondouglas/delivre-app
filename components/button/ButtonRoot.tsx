import { ReactNode } from "react"

interface ButtonRootInterface {
    children: ReactNode,
    action: any
}

export default function ButtonRoot({ children, action }: ButtonRootInterface) {

    return (
        <button className="flex-1 bg-primary text-white rounded-md px-5 py-4 flex justify-between items-center" onClick={action}>
            {children}
        </button>
    )
}