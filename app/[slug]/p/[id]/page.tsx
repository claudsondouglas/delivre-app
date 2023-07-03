import Backbar from "@/components/Backbar";
import ItemOpen from "@/components/ItemOpen";
import UserRepository from "@/repositories/UserRepository";

export default async function Page({ params: { slug, id } }: { params: { slug: string, id: number } }) {
    const product = await getProduct(id);
    const user = await UserRepository.info(slug);

    return (
        <>
            <style>{`
                    :root {
                        --primary-color: ${user.profile.color ?? 'rgba(220, 38, 38, 1)'}
                    }
                    `}
            </style>
            <div className="max-w-4xl mx-auto px-5 lg:px-0 py-5 flex flex-col h-full">
                <div className="flex-1">
                    <Backbar href={`/${slug}`} />
                    {product.image &&
                        <div className="mb-3">
                            <img src={product.image} alt={product.name} className="w-full aspect-[16/10] object-cover rounded" />
                        </div>
                    }
                    <strong className="text-lg text-gray-700">{product.name}</strong>
                    <p className="text-gray-500">{product.description}</p>
                </div>

                <ItemOpen item={product} />
            </div>
        </>
    )
}


async function getProduct(id: number) {
    const res = await fetch(`${process.env.API_URL}/product/${id}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}