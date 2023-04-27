'use client';

import cartStore from "@/store/cart";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Item({ product }: { product: any }) {
    const add = cartStore((state: any) => state.add);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="border-b-2 last:border-none border-slate-100 p-3 px-5 h-full cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <strong className="text-lg text-gray-700">{product.name}</strong>
                <p className="text-gray-500 text-sm md:text-base">{product.description}</p>
                <div className="mt-2">
                    <strong className="text-gray-700">{
                        product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    }</strong>
                </div>
            </div>
            <motion.div
                initial={{
                    top: '100%',
                    height: '0px'
                }}
                animate={{
                    top: open ? '0%' : '120%',
                    zIndex: open ? 999 : -100,
                    height: open ? '100%' : '0px'
                }}
                className={`fixed bg-white overflow-hidden inset-x-0`}
            >
                <div className="max-w-4xl mx-auto px-5 lg:px-0 flex flex-col h-full">
                    <div className="flex-1">
                        <div>
                            <div className="my-5">
                                <span className="bg-black/5 w-12 h-12 flex items-center justify-center rounded-lg" onClick={() => { setOpen(!open) }}>
                                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.48701 16.1753L17.7403 25.2662C18.3896 25.9156 19.3636 25.9156 20.013 25.2662C20.6623 24.6169 20.6623 23.6429 20.013 22.9935L12.0584 14.8766L20.013 6.75974C20.6623 6.11039 20.6623 5.13636 20.013 4.48701C19.6883 4.16234 19.3636 4 18.8766 4C18.3896 4 18.0649 4.16234 17.7403 4.48701L8.48701 13.5779C7.83766 14.3896 7.83766 15.3636 8.48701 16.1753C8.48701 16.013 8.48701 16.013 8.48701 16.1753Z" fill="#FF0000" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <strong className="text-lg text-gray-700">{product.name}</strong>
                        <p className="text-gray-500 text-sm md:text-base">{product.description}</p>
                    </div>
                    <div className="h-auto pb-5 flex flex-col">
                        <button className="bg-red-600 text-white rounded-md px-5 py-4 flex justify-between items-center" onClick={() => {
                            add(product);
                            setOpen(false)
                        }}>
                            <span>Adicionar</span>

                            <span className="">{
                                product.price.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                            }</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}