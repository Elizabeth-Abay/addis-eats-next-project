'use client'

import { useEffect, useState } from "react";

// bc it will depend on the client and will read the username from the local storage
export default function NameCircle(){
    let [ name , setName ] = useState('User')

    let letter = name[0];

    useEffect(
        () => {
            let userName = localStorage.getItem('name') || 'User';

            setName(userName);
        } , [name]
    )

    return (
        <div>
            <div className="user-badge" 
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap:"12px"
                }}
            >
                <div 
                    className="user-avatar" 
                    aria-label="Alex Johnson"
                    style={
                        {
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            backgroundColor: "#4f46e5", /* Indigo accent color */
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent :"center",
                            fontWeight: 600,
                            fontSize: "1.125rem",
                            textTransform: "uppercase",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }
                    }
                >
                {
                    letter
                }   
                </div>
                <span className="user-name"
                    style={
                        {
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "#1f2937",
                        }
                    }   
                >{
                    name ? name : "User"
                }</span>
            </div>
        </div>
    )
    
}