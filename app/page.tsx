export default async function Home() {
  const producs = await getData();

  return (
    <div>
      <header className="py-5 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-10">
          <span className="font-bold text-3xl">delivre.</span>
        </div>
      </header>
      <header className="py-3 bg-slate-100 text-gray-500 lg:mb-10">
        <div className="max-w-4xl mx-auto px-10">
          <span className="text-sm md:text-base">Rua Sete de Setembro, João Câmara</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        {producs.map((product: any) => (
          <div key={product.id} className="border-b-2 last:border-none border-slate-100 p-3 px-10">
            <strong className="text-lg text-gray-700">{product.name}</strong>
            <p className="text-gray-500 text-sm md:text-base">{product.description}</p>
            <div className="mt-2">
              <strong className="text-gray-700">{
                product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }</strong>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

async function getData() {
  const res = await fetch(`http://localhost:3001/product`, {
    cache: 'no-cache',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}