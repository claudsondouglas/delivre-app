'use client';

import { useRouter } from "next/navigation";

export default function Backbar({ href, onclick } :  { href?: string, onclick?: any }) {
    const router = useRouter();

    function executeAction() {
        if (href) {
            router.push(href);
        } else {
            onclick();
        }
    }

    return (
        <div className="mb-5">
            <span className="bg-black/5 hover:bg-primary text-primary duration-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer" onClick={executeAction}>
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.48701 16.1753L17.7403 25.2662C18.3896 25.9156 19.3636 25.9156 20.013 25.2662C20.6623 24.6169 20.6623 23.6429 20.013 22.9935L12.0584 14.8766L20.013 6.75974C20.6623 6.11039 20.6623 5.13636 20.013 4.48701C19.6883 4.16234 19.3636 4 18.8766 4C18.3896 4 18.0649 4.16234 17.7403 4.48701L8.48701 13.5779C7.83766 14.3896 7.83766 15.3636 8.48701 16.1753C8.48701 16.013 8.48701 16.013 8.48701 16.1753Z" className="fill-current" />
                </svg>
            </span>
        </div>
    )
}