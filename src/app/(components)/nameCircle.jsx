'use client'

// bc it will depend on the client and will read the username from the local storage
export default function NameCircle(){
    let name = localStorage.get('name');

    let letter = name ? name[0] : 'U';

    return (
        <div>
            <div class="user-badge" 
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap:"12px"
                }}
            >
                <div 
                    class="user-avatar" 
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
                <span class="user-name"
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