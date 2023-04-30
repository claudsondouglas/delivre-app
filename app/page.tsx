import Item from "@/components/Item";
import Cart from "@/components/Cart";

export default async function Home() {
  const producs = await getData();

  return (
    <div className="min-h-screen">
      <header className="py-5 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-5">
          <span className="font-bold text-3xl">delivre.</span>
        </div>
      </header>
      <header className="py-3 bg-slate-100 text-gray-500 lg:mb-10">
        <div className="max-w-4xl mx-auto px-5">
          <span className="text-sm md:text-base">Rua Sete de Setembro, João Câmara</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto pb-20">
        {producs.map((product: any, index: number) => (
            <Item key={index} product={product} />
        ))}
        <Cart />
      </div>
    </div >
  )
}

async function getData() {
  const res = await fetch(`${process.env.API_URL}/product`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}