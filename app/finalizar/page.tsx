'use client';

import { useState } from "react";

export default function Page() {
    const [addressStreet, setAddressStreet] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [addressNeighboorhood, setAddressNeighboorhood] = useState('');
    const [addressReference, setAddressReference] = useState('');

    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    
    function submit() {
        if (addressStreet === '') {
            return alert("Informe a rua de entrega");
        }

        if(addressNumber === '') {
            return alert("Informe o número para a entrega");
        }

        if(addressNeighboorhood === '') {
            return alert("Informe o bairro para a entrega");
        }

        if(customerName === '' || customerPhone === '') {
            return alert("Informe os dados pessoais para ajuda na entrega");
        }
        

        alert(`Olá, meu pedido é
        
        
Rua: ${addressStreet}
Número: ${addressNumber}
Bairro: ${addressNeighboorhood}${addressReference !== '' ? `
Referência: ${addressReference}` : ''}

Para entrar em contato procure por ${customerName} ou ligue para ${customerPhone}
`);
    }

    return (
        <div className="min-h-screen max-w-screen-md mx-auto px-10 pt-10">
            <div className="grid">
                <label>Endereço*</label>
                <input placeholder="Nome da rua" onInput={(e: any) => {
                    setAddressStreet(e.target.value)
                }} value={addressStreet}/>
            </div>
            <div className="grid">
                <label>Número*</label>
                <input placeholder="Número da casa/prédio" onInput={(e: any) => {
                    setAddressNumber(e.target.value)
                }} value={addressNumber}/>
            </div>
            <div className="grid">
                <label>Bairro*</label>
                <input placeholder="Nome do bairro" onInput={(e: any) => {
                    setAddressNeighboorhood(e.target.value)
                }} value={addressNeighboorhood}/>
            </div>
            <div className="grid">
                <label>Referência</label>
                <input placeholder="Nome da rua" onInput={(e: any) => {
                    setAddressReference(e.target.value)
                }} value={addressReference}/>
            </div>
            <div className="border-t-2 mt-5 pt-5">
                <div className="grid">
                    <label>Nome</label>
                    <input placeholder="Seu nome" onInput={(e: any) => {
                    setCustomerName(e.target.value)
                }} value={customerName}/>
                </div>
                <div className="grid">
                    <label>Telefone</label>
                    <input placeholder="Telefone para contato" onInput={(e: any) => {
                    setCustomerPhone(e.target.value)
                }} value={customerPhone}/>
                </div>
            </div>
            <div className="border-t-2 mt-5 pt-5">
                <label>Nome</label>
                <div className="grid gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <input type="radio" id="contactChoice2" name="contact" value="pix" />
                        <label htmlFor="contactChoice2">PIX</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="radio" id="contactChoice1" name="contact" value="dinheiro" />
                        <label htmlFor="contactChoice1">Dinheiro</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="radio" id="contactChoice3" name="contact" value="cartão" />
                        <label htmlFor="contactChoice3">Cartão</label>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 px-10 pb-5 flex max-w-screen-md w-full">
                <button className="bg-red-600 text-white w-full py-4 rounded" onClick={submit}>Enviar pedido</button>
            </div>
        </div>
    )
}