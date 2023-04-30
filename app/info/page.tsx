import Backbar from "@/components/Backbar";

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto px-5 lg:px-0 py-5">
            <Backbar href="/"/>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Contato</h2>
            <div className="grid gap-3">
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Telefone:</span> (84) 994071801
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Whatsapp:</span> (84) 994071801
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Horario de funcionamento:</span> das 18 as 22 horas
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Endereço:</span> Rua principal, 75, próximo a rodoviaria
                </div>
            </div>
        </div>
    );
}