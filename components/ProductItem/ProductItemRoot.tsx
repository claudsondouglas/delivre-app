'use client';

import cartStore from "@/store/cart";
import { ReactNode } from "react";

export default function ProductItemRoot({ children, product }: { children: ReactNode, product: any }) {
    const selectItem = cartStore((state: any) => state.selectItem);

    return (
        <>
            <div className="border-b-2 last:border-none border-slate-100 py-3 px-5 lg:px-0 h-full cursor-pointer flex justify-between gap-3"
                onClick={() => selectItem(product)}
            >
                { children }
            </div>
        </>
    );
}