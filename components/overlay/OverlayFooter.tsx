import { ReactNode } from "react";

export default function OverlayFooter({ children }:{children: ReactNode}) {
    return (
        <footer className="h-auto flex gap-5 mt-5">
            { children }
        </footer>
    )
}