'use client'
import { useRouter } from "next/navigation"
import { logOut } from "../(actions)/authActs"

export default function LogOutButton(){
    let router = useRouter()
    let handleClick = async (e) => {
        // this handleClick shld be the logout
        // to logout means to remove the user cookie

        // delete the saved session in the backend
        // it should remove the server action

        try {
            let result = await logOut()

            if (result.success) { 
                alert('successful log out')
                router.push('/')
            }

            else{
                alert('log out unsuccessful')
            }
        } catch (error) {
            
        }
        
    }

    return (
        <button onClick={handleClick}>
            Log Out
        </button>
    )
}