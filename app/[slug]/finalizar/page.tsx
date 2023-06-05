import Backbar from "@/components/Backbar";
import FinishForm from "./form";
import UserRepository from "@/repositories/UserRepository";

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
    const user = await UserRepository.info(slug);

    return (
        <div className="min-h-screen max-w-4xl w-full mx-auto px-5 lg:px-0 pt-5">
            <style>{`
                    :root {
                        --primary-color: ${user.profile.color ?? 'rgb(220, 38, 38)'}
                    }
                    `}
            </style>
            <Backbar href={`${slug}/?cart=1`} />
            <div>
                <FinishForm phone={user.profile.phone} deliveryPrice={user.profile.deliveryPrice}/>
            </div>
        </div>
    )
}