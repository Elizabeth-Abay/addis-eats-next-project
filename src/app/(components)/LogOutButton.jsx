'use client'
import { useRouter } from "next/navigation"
import { logOut } from "../(actions)/authActs";
import './style.css'

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
                // then clear out the localStorage set up
                localStorage.removeItem('name')

                router.refresh()
                router.replace('/')
            }

            else{
                alert('log out unsuccessful')
            }
        } catch (error) {
            // incase of error have it log out something to the logger
        }
        
    }

    return (
        <button onClick={handleClick}
            className="btn-logout-warning"
        >
            Log Out
        </button>
    )
}