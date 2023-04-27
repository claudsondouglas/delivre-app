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
            className="fixed inset-x-0 w-full"
            initial={{
                bottom: '-10%',
            }}
            animate={{
                backgroundColor: open ? 'white' : 'transparent',
                top: open ? '0%' : 'auto',
                bottom: list.length > 0 ? '0%' : '-20%'
            }}
        >
            <div className="max-w-4xl mx-auto relative h-full flex flex-col justify-between py-2">
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
                    className="overflow-hidden rounded-lg mb-3 px-5 lg:px-0"
                >
                    {open &&
                        <div className="mb-5">
                            <span className="bg-black/5 w-12 h-12 flex items-center justify-center rounded-lg" onClick={() => { setOpen(!open) }}>
                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.48701 16.1753L17.7403 25.2662C18.3896 25.9156 19.3636 25.9156 20.013 25.2662C20.6623 24.6169 20.6623 23.6429 20.013 22.9935L12.0584 14.8766L20.013 6.75974C20.6623 6.11039 20.6623 5.13636 20.013 4.48701C19.6883 4.16234 19.3636 4 18.8766 4C18.3896 4 18.0649 4.16234 17.7403 4.48701L8.48701 13.5779C7.83766 14.3896 7.83766 15.3636 8.48701 16.1753C8.48701 16.013 8.48701 16.013 8.48701 16.1753Z" fill="#FF0000" />
                                </svg>
                            </span>
                        </div>
                    }
                    {
                        open && list.map((product: any, index: number) => (
                            <div className="flex justify-between items-center border-b last:border-none py-3 border-gray-200" key={index}>
                                <span>1x {product.name}</span>
                                <span>R${product.price.toFixed(2)}</span>
                            </div>
                        ))
                    }
                </motion.div>
                <div className="flex flex-col pb-4">
                    {open &&
                        <div className="border-t-2 p-5 lg:p-0 flex items-center justify-between font-medium">
                            <span>Total com entrega:</span> <span>R${(total+5).toFixed(2).replace('.', ',')}</span>
                        </div>
                    }
                    <motion.button
                        className={`${list.length > 0 ? 'bg-red-600 duration-500' : 'bg-slate-300'} text-white px-4 py-4 box-border rounded-md mx-5 lg:mx-0`}
                        onClick={next}
                    >
                        {
                            list.length > 0 ?
                                (open ? 'Escolher forma de pagamento' : `Ver carrinho (R$${total.toFixed(2).replace('.', ',')})`)
                                : `Carrinho vazio`
                        }
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}