import Cart from "@/components/Cart";
import Link from "next/link";
import { MapPin, Calendar, Info } from "lucide-react";
import { range } from 'lodash';
import { DateTime } from "luxon";
import UserRepository from "@/repositories/UserRepository";
import ItemOpen from "@/components/ItemOpen";
import { ProductItem } from "@/components/ProductItem/Index";

export default async function Home({
    params: {
        slug
    }
}: {
    params: {
        slug: string
    }
}) {
    const user = await UserRepository.info(slug);
    const products = await getProductsOfUser(user.id);
    const daysOfWeek = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
    const resultado = range(7).map((dia: any) => ({ day: dia + 1 })).map((diaDaSemana: any) => {
        const timetable = user.timetables.find((item: any) => item.day === diaDaSemana.day);
        return timetable ? timetable : diaDaSemana;
    });

    const now = DateTime.now().setZone("America/Sao_Paulo");
    const today = now.weekday;

    const start = resultado.find((item: any) => item.day === today).start ?? false;
    const end = resultado.find((item: any) => item.day === today).end ?? false;
    let open = false;

    if (start && end) {
        const startDate = DateTime.fromFormat(start.slice(11, 16), 'HH:mm').setZone("America/Sao_Paulo");

        if ((now > startDate)) {
            open = true;
        }
        const endDate = DateTime.fromFormat(end.slice(11, 16), 'HH:mm').setZone("America/Sao_Paulo");
        if (now > endDate) {
            open = false;
        }

        if (now >= startDate && now <= endDate) {
            open = true;
        }
    }


    return (
        <div className="min-h-screen">
            <style>{`
                    :root {
                        --primary-color: ${user.profile.color ?? 'rgba(220, 38, 38, 1)'}
                    }
                    `}
            </style>

            <header className="">
                <div className="bg-primary h-[120px] relative" style={{
                    background: user.profile.color
                }}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                </div>

                <div className="flex px-5 lg:px-0 gap-5 max-w-4xl mx-auto">
                    <div className="w-[120px] h-[120px] relative">
                        <div className="w-[120px] -mt-[60px] border-2 border-white rounded-lg">
                            <img src={user.profile.profilePicture} className="rounded-lg" />
                        </div>
                    </div>
                    <div className="flex-1 pt-2 text-sm">
                        <div className={`${open ? 'text-green-600' : 'text-gray-400'}`}><strong>{open ? 'Aberto' : 'Fechado'}</strong></div>
                        <div className="font-bold text-xl">{user.name}</div>
                    </div>
                </div>
                <div className="px-5 lg:px-0 -mt-[40px] max-w-4xl mx-auto">
                    <div className="flex flex-col gap-1 justify-center text-gray-500 text-sm">
                        <div className="flex-col flex gap-2">
                            <span className="flex items-start gap-2">
                                <MapPin size={22} className="relative -top-[2px]" /> <span className="flex-1">{user.profile.address}</span>
                            </span>
                            <div className="flex items-start gap-2">
                                <Calendar size={22} className="relative -top-[2px]" />
                                <div className="flex-1">
                                    <span className="capitalize">{daysOfWeek[resultado[today - 1].day - 1]}</span> {resultado[today - 1].start === undefined ? '(não abre)' : resultado[today - 1].start.slice(11, 16) + ' até ' + resultado[today - 1].end.slice(11, 16)}
                                </div>
                            </div>
                            <Link href={`/${slug}/info`}>
                                <div className="flex items-start gap-2">
                                    <Info size={22} className="relative -top-[2px]" /> <span>Ver mais informações</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>


            <span className="bg-white/20 h-12 w-12 flex items-center justify-center rounded-full">
                <svg className="w-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone"><path className="fill-current" d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"></path></svg>
            </span>

            <div className="max-w-4xl mx-auto pb-20 -mt-[20px]">
                <div className="px-5 lg:px-0 pb-2 text-xl font-bold border-b-2">
                    Produtos
                </div>
                {products.map((product: any, index: number) => (
                    <ProductItem.root key={index} product={product}>
                        <ProductItem.info name={product.name} description={product.description}>
                            <ProductItem.price value={product.price} />
                        </ProductItem.info>
                        <ProductItem.image image={product.image} name={product.name} />
                    </ProductItem.root>
                ))}
                <ItemOpen />
                <Cart slug={slug} deliveryPrice={user.profile.deliveryPrice} />
            </div>
        </div >
    )
}

async function getProductsOfUser(id: number) {
    const res = await fetch(`${process.env.API_URL}/product/user/${id}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}