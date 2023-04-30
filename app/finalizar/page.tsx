'use client';

import Backbar from "@/components/Backbar";
import cartStore from "@/store/cart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function Page() {
    const [addressStreet, setAddressStreet] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [addressNeighboorhood, setAddressNeighboorhood] = useState('');
    const [addressReference, setAddressReference] = useState('');

    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');

    const [paymentMethod, setPaymentMethod] = useState('');
    const [change, setChange] = useState(0);

    const list = cartStore((state: any) => state.list);
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, []);

    useEffect(() => {
        if (list.length === 0) {
            router.push('/');
        }
    }, [list])

    function submit() {
        if (addressStreet === '') {
            return alert("Informe a rua de entrega");
        }

        if (addressNumber === '') {
            return alert("Informe o número para a entrega");
        }

        if (addressNeighboorhood === '') {
            return alert("Informe o bairro para a entrega");
        }

        if (customerName === '' || customerPhone === '') {
            return alert("Informe os dados pessoais para ajuda na entrega");
        }

        if (paymentMethod === '') {
            return alert("Informe o método de pagamento");
        }

        // foreach list object
        let prices = '';
        let total = 0;
        list.forEach((item: any) => {
            prices += `${item.quantity}x ${item.name} (R$${(item.price * item.quantity).toFixed(2)})
`;
            total += item.price * item.quantity;
        })

        // open link target blank js
        window.open(`https://wa.me/5584991956417?text=` + encodeURI(`Olá Delivre, meu pedido é:
          
${prices}--------------------------------------------------------------
*total: R$${total.toFixed(2)}*
*método de pagamento: ${paymentMethod}*${paymentMethod === 'dinheiro' ? `
*troco para: `+ change.toFixed(2) + `*` : ''
            }
--------------------------------------------------------------
Rua: ${addressStreet}
Número: ${addressNumber}
Bairro: ${addressNeighboorhood}${addressReference !== '' ? `
Referência: ${addressReference}` : ''}

Para entrar em contato procure por ${customerName} ou ligue para ${customerPhone}
`), '_blank');
    }

    return (
        <div className="min-h-screen max-w-4xl w-full mx-auto px-5 lg:px-0 pt-5">
            <Backbar href={'/?cart=1'} />

            <div className="grid gap-3">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Entrega e pagamento</h2>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-semibold">Dados para contato</h2>
                    <Popover>
                        <PopoverTrigger>
                            <span className="flex">
                                <svg className="w-6 text-gray-400" id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fill-current" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                            </span>
                        </PopoverTrigger>
                        <PopoverContent>
                            Precisamos do endereço para entrega.
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid">
                    <label className="input_label">Endereço*</label>
                    <input className="input" placeholder="Nome da rua" onInput={(e: any) => {
                        setAddressStreet(e.target.value)
                    }} value={addressStreet} />
                </div>
                <div className="grid">
                    <label className="input_label">Número*</label>
                    <input className="input" name="addressNumber" placeholder="Número da casa/prédio" onInput={(e: any) => {
                        setAddressNumber(e.target.value)
                    }} value={addressNumber} />
                </div>
                <div className="grid">
                    <label className="input_label">Bairro*</label>
                    <input className="input" name="neighboorhood" placeholder="Nome do bairro" onInput={(e: any) => {
                        setAddressNeighboorhood(e.target.value)
                    }} value={addressNeighboorhood} />
                </div>
                <div className="grid">
                    <label className="input_label">Referência</label>
                    <input className="input" name="reference" placeholder="Nome da rua" onInput={(e: any) => {
                        setAddressReference(e.target.value)
                    }} value={addressReference} />
                </div>
            </div>
            <div className="grid gap-3 border-t-2 mt-5 pt-5">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-semibold">Dados para contato</h2>
                    <Popover>
                        <PopoverTrigger>
                            <span className="flex">
                                <svg className="w-6 text-gray-400" id="info-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fill-current" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                            </span>
                        </PopoverTrigger>
                        <PopoverContent>
                            Precisamos dos dados de contato para entrega.
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid">
                    <label className="input_label">Nome</label>
                    <input className="input" placeholder="Seu nome" onInput={(e: any) => {
                        setCustomerName(e.target.value)
                    }} value={customerName} />
                </div>
                <div className="grid">
                    <label className="input_label">Telefone</label>
                    <input className="input" placeholder="Telefone para contato" onInput={(e: any) => {
                        setCustomerPhone(e.target.value)
                    }} value={customerPhone} />
                </div>
            </div>
            <div className="border-t-2 mt-5 pt-5">
                <h2 className="text-xl font-semibold">Forma de pagamento</h2>

                <div className="grid gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input className="input" type="radio" id="paymentMethod1" name="paymentMethod" value="pix" onChange={(e: any) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="contactChoice2">PIX</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input className="input" type="radio" id="paymentMethod2" name="paymentMethod" value="dinheiro" onChange={(e: any) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="contactChoice1">Dinheiro</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input className="input" type="radio" id="paymentMethod3" name="paymentMethod" value="cartão" onChange={(e: any) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="contactChoice3">Cartão</label>
                    </div>

                    {
                        paymentMethod === 'dinheiro' && <div className="w-full flex flex-col mt-2">
                            <label className="input_label">Troco para quanto?</label>
                            <input className="input" type="number" id="change" name="change" value={change} onChange={(e: any) => setChange(parseInt(e.target.value))} />
                        </div>
                    }
                </div>
            </div>
            <div className="pt-5 pb-5 flex max-w-4xl w-full">
                <button className="bg-red-600 text-white w-full py-4 rounded" onClick={submit}>Enviar pedido</button>
            </div>
        </div>
    )
}