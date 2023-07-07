import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function OverlayRoot({ children, open }: { children: ReactNode, open: boolean }) {
    return (
        <motion.div
            initial={{
                y: '100%',
                opacity: 0
            }}
            animate={{
                y: open ? '0%' : '100%',
                opacity: open ? 1 : 0
            }}
            transition={{
                type: 'tween'
            }}
            className={`bg-white inset-0 fixed z-[9999]`}
        >
            <div className="max-w-4xl mx-auto px-5 lg:px-0 py-5 flex flex-col h-full overflow-y-auto">
                {children}
            </div>
        </motion.div>
    )
}