'use client';

import cartStore from "@/store/cart";

export default function Item({ product }: { product: any }) {
    const selectItem = cartStore((state: any) => state.selectItem);

    return (
        <>
            <div className="border-b-2 last:border-none border-slate-100 py-3 px-5 lg:px-0 h-full cursor-pointer flex justify-between gap-3"
                onClick={() => selectItem(product)}
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
        </>
    );
}