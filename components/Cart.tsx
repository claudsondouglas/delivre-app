'use client';

import cartStore from "@/store/cart";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "./button/Index";
import { Overlay } from "./overlay/Index";
import FloatCartButton from "./FloatCartButton";

export default function Cart({ slug, deliveryPrice }: { slug: string, deliveryPrice: number }) {
    const list = cartStore((state: any) => state.list);
    const total = cartStore((state: any) => state.total);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const remove = cartStore((state: any) => state.remove);


    const searchParams = useSearchParams()!;
    function meuCallback(event: any) {
        event.preventDefault();
        close();
    }

    useEffect(() => {
        window.removeEventListener('popstate', meuCallback);

        if (open) {
            history.pushState(null, 'Cart', location.pathname);
            document.body.style.overflow = 'hidden';
            window.addEventListener('popstate', meuCallback);
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        if (searchParams.has('cart') && list.length > 0) {
            router.replace('/' + slug)
            setOpen(true);
        }
    }, [searchParams])

    useEffect(() => {
        if (list.length === 0) {
            close();
        }
    }, [list]);

    function close() {
        setOpen(false);
        history.pushState(null, '', location.pathname);
    }

    function next() {
        if (open && list.length > 0) {
            return router.push('/' + slug + '/finalizar')
        }

        setOpen(!open);
    }

    return (
        <>
            <Overlay.root open={open}>
                <Overlay.close action={close} />
                <Overlay.content>
                    {
                        open && list.map((product: any, index: number) => (
                            <div className="flex justify-between items-center border-b last:border-none py-3 border-gray-200" key={index}>
                                <div className="flex flex-col">
                                    <span>{product.quantity}x {product.name}</span>
                                    <span>R${product.price.toFixed(2)}</span>
                                    {
                                        product.observation && <span className="text-gray-500 text-sm">
                                            <strong className="font-medium">Observação:</strong> {product.observation}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <button onClick={() => { remove(index) }} className="bg-transparent w-10 h-10 flex items-center justify-center rounded-md text-gray-400 duration-300 hover:text-primary">
                                        <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash"><path className="fill-current" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </Overlay.content>
                <Overlay.footer>
                    <div className="flex flex-col w-full">
                        {open &&
                            <div className="border-t-2 py-5 lg:px-0 grid">
                                <div className="flex items-center justify-between">
                                    <span>Subtotal:</span> <span>R${total.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Entrega:</span> <span>R${deliveryPrice.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="flex items-center justify-between font-medium">
                                    <span>Total com entrega:</span> <span>R${(total + deliveryPrice).toFixed(2).replace('.', ',')}</span>
                                </div>
                            </div>
                        }

                        <Button.root action={next}>
                            <Button.primary textPosition="center">
                                Pagamento
                            </Button.primary>
                        </Button.root>
                    </div>
                </Overlay.footer>
            </Overlay.root>

            <FloatCartButton text={ list.length > 0 ? `Ver carrinho (R$${total.toFixed(2).replace('.', ',')})` : `Carrinho vazio` } next={next} show={list.length > 0} />
        </>
    );
}