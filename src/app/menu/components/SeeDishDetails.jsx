"use client"

import { useRouter } from "next/navigation";

export default function SeeDetail({id}){
    // here we gotta have a cutesy details part to indicate the click and see the detail
    const router = useRouter()

    const onClick = () => {
        router.push(`/menu/${id}`);
    };

    return (
        <button onClick={onClick}
        style={{
                position: "absolute",
                top: "50px",
                right: "12px",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "9999px",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#ffffff",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                backdropFilter: "blur(6px)",
                fontSize: "11px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f59e0b";
                e.currentTarget.style.color = "#180c07";
                e.currentTarget.style.borderColor = "#f59e0b";
                e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
                e.currentTarget.style.transform = "scale(1)";
            }}>
            Details
        </button>
    )
}