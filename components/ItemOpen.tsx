'use client';

import cartStore from "@/store/cart";
import { useEffect, useState } from "react";
import { Button } from "./button/Index";
import { Overlay } from "./overlay/Index";

export default function ItemOpen() {
    const add = cartStore((state: any) => state.add);
    const item = cartStore((state: any) => state.item);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');
    const selectItem = cartStore((state: any) => state.selectItem);

    useEffect(() => {
        window.removeEventListener('popstate', meuCallback);

        if (item !== null) {
            history.pushState(null, 'Página do produto', location.pathname);
            window.addEventListener('popstate', meuCallback);
            setOpen(true);
            document.body.style.overflow = 'hidden';
        } else {
            setOpen(false);
            document.body.style.overflow = 'auto';
        }
    }, [item]);

    function meuCallback(event: any) {
        event.preventDefault();
        close();
    }

    function close() {
        setOpen(false);
        selectItem(null);
        history.pushState(null, '', location.pathname);
    }

    function addToCart() {
        let _add = {
            ...item,
            quantity,
        }

        if (observation != null || observation != '') {
            _add.observation = observation;
        }

        add(_add);
        setQuantity(1);
        setOpen(false);
        selectItem(null);
    }

    return (
        <Overlay.root open={open}>
            {item != null &&
                <>
                    <Overlay.close action={close}/>
                    <Overlay.content>
                        {item.image &&
                            <div className="mb-3">
                                <img src={item.image} alt={item.name} className="w-full aspect-[16/10] object-cover rounded" />
                            </div>
                        }
                        <strong className="text-lg text-gray-700">{item.name}</strong>
                        <p className="text-gray-500">{item.description}</p>
                        <div className="mt-5 border-t-2 pt-4">
                            <label className="mb-2 block font-bold text-gray-600">Observação</label>
                            <textarea className="input w-full resize-none h-[100px]" placeholder="Eu quero..." onInput={(e) => setObservation(e.currentTarget.value)} value={observation}></textarea>
                        </div>
                    </Overlay.content>
                    
                    <Overlay.footer>
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

                        <Button.root action={addToCart}>
                            <Button.primary>
                                Adicionar
                            </Button.primary>
                            <Button.right>
                                {
                                    (item.price * quantity).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })
                                }
                            </Button.right>
                        </Button.root>
                    </Overlay.footer>
                </>
            }
        </Overlay.root>
    )
}