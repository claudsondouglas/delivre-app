import { ReactNode } from "react";

export default function ProductItemInfo({ children, name, description }: { children: ReactNode, name: string, description: string }) {
    return (
        <div className="flex-1">
            <strong className="text-lg text-gray-700">{name}</strong>
            <p className="text-gray-500 text-sm md:text-base">{description}</p>

            <div className="flex gap-2 mt-2">
                {children}
            </div>
        </div>
    )
}