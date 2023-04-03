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
                            <button onClick={() => setOpen(false)} className="py-5">
                                voltar
                            </button>
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