"use client"

import { useRouter } from "next/navigation";

export default function SeeDetail(){
    // here we gotta have a cutesy details part to indicate the click and see the detail
    const router = useRouter()

    const onClick = () => {
        router.push(`/menu/${id}`);
    };

    return (
        <button onClick={onClick}>
            Details
        </button>
    )
}