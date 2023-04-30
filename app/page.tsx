import Item from "@/components/Item";
import Cart from "@/components/Cart";
import Link from "next/link";

export default async function Home() {
  const producs = await getData();

  return (
    <div className="min-h-screen">
      <header className="py-3 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-0 flex items-center justify-between">
          <span className="font-bold text-3xl">Delivre.</span>

          <Link href={`/info`}>
            <span className="bg-white/20 h-12 w-12 flex items-center justify-center rounded-full">
              <svg className="w-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone"><path className="fill-current" d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"></path></svg>
            </span>
          </Link>
        </div>
      </header>
      <header className="py-2 bg-slate-100 text-gray-500">
        <div className="max-w-4xl mx-auto px-5 lg:px-0">
          <span className="text-sm md:text-base">👀 Aberto das 18h até as 23h</span>
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