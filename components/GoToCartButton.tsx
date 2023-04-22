'use client';

import cartStore from "@/store/cart";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function GoToCartButton({ }: {}) {
    const list = cartStore((state: any) => state.list);
    const total = cartStore((state: any) => state.total);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    function next() {
        if (open && list.length > 0) {
            return router.push('/finalizar')
        }

        setOpen(!open);
    }

    return (
        <motion.div 
            className="fixed inset-x-0 w-full py-5"
            initial={{
                bottom: '-10%',
            }}
            animate={{
                backgroundColor: open ? 'red':'transparent',
                top: open ? '0%' : 'auto',
                bottom: list.length > 0 ? '0%' : '-20%'
            }}
        >
            <div className="max-w-4xl mx-auto relative px-5 lg:px-0">
                <motion.div
                    initial={{
                        height: '0px',
                        padding: '0px'
                    }}
                    animate={{
                        height: open ? 'auto' : '0px',
                        padding: open ? '1rem' : '0px'
                    }}
                    transition={{
                        padding: {
                            duration: 0,
                            type: "tween"
                        }
                    }}
                    className="overflow-hidden bg-white rounded-lg mb-3"
                >
                    {
                        list.map((product: any, index: number) => (
                            <div className="flex justify-between" key={index}>
                                <span>{ product.name }</span>
                                <span>R${ product.price.toFixed(2) }</span>
                            </div>
                        ))
                    }
                </motion.div>
                <motion.button 
                    className={`${list.length > 0 ? 'bg-red-600 duration-500':'bg-slate-300'} text-white px-4 py-4 box-border w-full rounded-md`} 
                    onClick={next}
                >
                    {
                        list.length > 0 ? 
                        (open ? 'Escolher forma de pagamento':`Ver carrinho (R$${total.toFixed(2).replace('.', ',')})`) 
                        : `Carrinho vazio`
                    }
                </motion.button>
            </div>
        </motion.div>
    );
}