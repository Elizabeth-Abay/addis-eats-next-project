'use client'

import userStore from "../(stores)/userStore";

// bc it will depend on the client and will read the username from the local storage
export default function NameCircle(){
    let name = userStore(state => state.userName)


    let letter = name && name.length > 0 ? name[0] : "U";;

    return (
        <div>
            <div className="user-badge" 
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection : "column",
                    gap:"2px"
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
                            backgroundColor: "#c2640d", /* Indigo accent color */
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
                            color: "#050505",
                        }
                    }   
                >{
                    name ? name : "User"
                }</span>
            </div>
        </div>
    )
    
}