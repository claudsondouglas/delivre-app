'use client';

import { useState } from "react";

export default function Form() {
    const [addressStreet, setAddressStreet] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [addressReference, setAddressReference] = useState('');
    
    function submit() {
        if (addressStreet === '') {
            alert("Informe a rua de entrega");
        }

        if(addressNumber === '') {
            alert("Informe o endereço de entrega");
        }

        alert("sucesso!")
    }

    return (
        <div className="min-h-screen max-w-screen-md mx-auto px-10 pt-10">
            <div className="grid">
                <label>Endereço*</label>
                <input placeholder="Nome da rua" />
            </div>
            <div className="grid">
                <label>Número*</label>
                <input placeholder="Nome da rua" />
            </div>
            <div className="grid">
                <label>Referência</label>
                <input placeholder="Nome da rua" />
            </div>
            <div className="border-t-2 mt-5 pt-5">
                <div className="grid">
                    <label>Nome</label>
                    <input placeholder="Nome da rua" />
                </div>
                <div className="grid">
                    <label>Telefone</label>
                    <input placeholder="Nome da rua" />
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
                <button className="bg-red-600 text-white w-full py-4 rounded">Enviar pedido</button>
            </div>
        </div>
    )
}