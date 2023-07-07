export default function ProductItemImage({ image, name }: { image?: string, name: string }) {
    if (!image) {
        return null;
    }

    return (
        <div>
            <img src={image} alt={name} className="w-[80px] aspect-square object-cover rounded" />
        </div>
    )
}