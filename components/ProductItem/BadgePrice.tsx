export default function BadgePrice({ value }: { value: number }) {
    return (
        <strong className="text-gray-700">
            {
                value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })
            }
        </strong>
    )
}