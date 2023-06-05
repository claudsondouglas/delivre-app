import Backbar from "@/components/Backbar";
import UserRepository from "@/repositories/UserRepository";
import { range } from 'lodash';

export default async function Page({
    params: { slug }
}: { params: { slug: string } }) {
    const user = await UserRepository.info(slug);
    const daysOfWeek = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
    const resultado = range(7).map((dia: any) => ({ day: dia + 1 })).map((diaDaSemana: any) => {
        const timetable = user.timetables.find((item: any) => item.day === diaDaSemana.day);
        return timetable ? timetable : diaDaSemana;
    });

    return (
        <div className="max-w-4xl mx-auto px-5 lg:px-0 py-5">
            <style>{`
                    :root {
                        --primary-color: ${user.profile.color ?? 'rgba(220, 38, 38, 1)'}
                    }
                    `}
            </style>
            <Backbar href={`/${slug}`} />
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{ user.name }</h2>
            <div className="flex flex-col text-gray-500 mb-10">
                    { user.profile.description }
            </div>
            <div className="grid gap-3">
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Telefone:</span> {user.profile.phone}
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Endereço:</span> {user.profile.address}
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="font-bold text-gray-700">Horários de funcionamento:</span>
                    <div>
                        {
                            resultado.map((item: any, index: any) => (
                                <div key={index} className="flex">
                                    <span className="text-gray-700 capitalize">{daysOfWeek[item.day - 1]}</span>: {item.start ? `${item.start.slice(11, 16)}h até as ${item.end.slice(11, 16)}h` : `Não abre`}
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}