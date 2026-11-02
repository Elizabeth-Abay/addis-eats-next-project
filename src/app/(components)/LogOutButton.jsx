'use client'
import { useRouter } from "next/navigation"
import { logOut } from "../(actions)/authActs";
import './style.css'
import userStore from "../(stores)/userStore";

export default function LogOutButton(){
    let router = useRouter();
    let logOutSession = userStore(state => state.logOut);

    let handleClick = async (e) => {
        // to logout means to remove the user cookie
        // delete the saved session in the backend


        try {
            let result = await logOut()

            if (result.success) { 
                alert('successful log out')
                logOutSession()
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