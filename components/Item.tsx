'use client';

import cartStore from "@/store/cart";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Backbar from "./Backbar";

export default function Item({ product }: { product: any }) {
    const add = cartStore((state: any) => state.add);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <>
            <div className="border-b-2 last:border-none border-slate-100 py-3 px-5 lg:px-0 h-full cursor-pointer flex justify-between gap-3"
                onClick={() => setOpen(true)}
            >
                <div className="flex-1">
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
                {product.image &&
                    <div>
                        <img src={product.image} alt={product.name} className="w-[80px] aspect-square object-cover rounded" />
                    </div>
                }
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
                <div className="max-w-4xl mx-auto px-5 lg:px-0 py-5 flex flex-col h-full">
                    <div className="flex-1">
                        <Backbar onclick={() => { setOpen(!open) }} />
                        {product.image &&
                            <div className="mb-3">
                                <img src={product.image} alt={product.name} className="w-full aspect-[16/10] object-cover rounded" />
                            </div>
                        }
                        <strong className="text-lg text-gray-700">{product.name}</strong>
                        <p className="text-gray-500">{product.description}</p>
                        <div className="mt-5 border-t-2 pt-4">
                            <label className="mb-2 block font-bold text-gray-600">Observação</label>
                            <textarea className="input w-full resize-none h-[100px]" placeholder="Eu quero..." onInput={(e) => setObservation(e.currentTarget.value)} value={observation}></textarea>
                        </div>
                    </div>
                    <div className="h-auto flex gap-5">
                        <div className="flex items-center w-auto rounded">
                            <button className={`w-6 h-10 rounded-l-lg flex items-center justify-center ${quantity === 1 ? 'text-gray-400' : 'text-primary'}`} onClick={() => {
                                if (quantity > 1)
                                    setQuantity(quantity - 1)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="minus" className="w-6"><path className="fill-current" d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path></svg>
                            </button>
                            <div className="w-10 flex items-center justify-center h-10 font-semibold text-gray-700">
                                {quantity}
                            </div>
                            <button className={`w-6 h-10 rounded-r-lg flex items-center justify-center text-primary`} onClick={() => {
                                setQuantity(quantity + 1)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus" className="w-6"><path className="fill-current" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
                            </button>
                        </div>
                        <button className="flex-1 bg-primary text-white rounded-md px-5 py-4 flex justify-between items-center" onClick={() => {
                            let _add = {
                                ...product,
                                quantity,
                            }

                            if (observation != null || observation != '') {
                                _add.observation = observation;
                            }

                            add(_add);
                            setQuantity(1);
                            setOpen(false)
                        }}>
                            <span>Adicionar</span>

                            <span className="">{
                                (product.price * quantity).toLocaleString('pt-BR', {
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