'use client';

import cartStore from "@/store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

    if (list.length === 0) {
        router.push('/');

        return (
            <div className="min-h-[80vh] max-w-screen-md mx-auto px-10 pt-10 flex justify-center items-center">
                <div className="grid">
                    <label>...</label>
                </div>
            </div>
        )
    }

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

        // foreach list object
        let prices = '';
        let total = 0;
        list.forEach((item: any) => {
            prices += `1x ${item.name} (R$${item.price.toFixed(2)})
`;
            total += item.price;
        })

        // open link target blank js
        window.open(`https://wa.me/5584991956417?text=` + encodeURI(`Olá Delivre, meu pedido é:
          
${prices}--------------------------------------------------------------
*total: R$${total.toFixed(2)}*
*método de pagamento: ${paymentMethod}*${
    paymentMethod === 'dinheiro' ? `
*troco para: `+ change.toFixed(2)+`*` : ''
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
        <div className="min-h-screen max-w-screen-md mx-auto px-10 pt-10">
            <div className="grid">
                <label>Endereço*</label>
                <input placeholder="Nome da rua" onInput={(e: any) => {
                    setAddressStreet(e.target.value)
                }} value={addressStreet} />
            </div>
            <div className="grid">
                <label>Número*</label>
                <input name="addressNumber" placeholder="Número da casa/prédio" onInput={(e: any) => {
                    setAddressNumber(e.target.value)
                }} value={addressNumber} />
            </div>
            <div className="grid">
                <label>Bairro*</label>
                <input name="neighboorhood" placeholder="Nome do bairro" onInput={(e: any) => {
                    setAddressNeighboorhood(e.target.value)
                }} value={addressNeighboorhood} />
            </div>
            <div className="grid">
                <label>Referência</label>
                <input name="reference" placeholder="Nome da rua" onInput={(e: any) => {
                    setAddressReference(e.target.value)
                }} value={addressReference} />
            </div>
            <div className="border-t-2 mt-5 pt-5">
                <div className="grid">
                    <label>Nome</label>
                    <input placeholder="Seu nome" onInput={(e: any) => {
                        setCustomerName(e.target.value)
                    }} value={customerName} />
                </div>
                <div className="grid">
                    <label>Telefone</label>
                    <input placeholder="Telefone para contato" onInput={(e: any) => {
                        setCustomerPhone(e.target.value)
                    }} value={customerPhone} />
                </div>
            </div>
            <div className="border-t-2 mt-5 pt-5">
                <label>Forma de pagamento</label>
                <div className="grid gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="radio" id="paymentMethod1" name="paymentMethod" value="pix" onChange={(e: any) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="contactChoice2">PIX</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="radio" id="paymentMethod2" name="paymentMethod" value="dinheiro" onChange={(e: any) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="contactChoice1">Dinheiro</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="radio" id="paymentMethod3" name="paymentMethod" value="cartão" onChange={(e: any) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="contactChoice3">Cartão</label>
                    </div>

                    {
                        paymentMethod === 'dinheiro' && <div>
                            <label className="block">Troco para quanto?</label>
                            <input type="number" id="change" name="change" value={change} onChange={(e: any) => setChange(parseInt(e.target.value))} />
                        </div>
                    }
                </div>
            </div>
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 px-10 pb-5 flex max-w-screen-md w-full">
                <button className="bg-red-600 text-white w-full py-4 rounded" onClick={submit}>Enviar pedido</button>
            </div>
        </div>
    )
}