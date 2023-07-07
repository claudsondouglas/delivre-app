import { motion } from "framer-motion";
import { Button } from "./button/Index";

export default function FloatCartButton({ text, next, show } : { text: string, next: any, show: boolean}) {
    return (
        <motion.div
            className="fixed inset-x-0 w-full"
            initial={{
                bottom: '-10%',
            }}
            animate={{
                bottom: show ? '0%' : '-20%'
            }}
        >
            <div className="max-w-4xl mx-auto relative h-full flex flex-col justify-between py-2 pb-4 px-5 lg:px-0">
                <Button.root action={next}>
                    <Button.primary textPosition="center">
                        { text }
                    </Button.primary>
                </Button.root>
            </div>
        </motion.div>
    )
}