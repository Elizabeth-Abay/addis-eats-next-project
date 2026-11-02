// this is a page where staff people could set up amounts
// so this user action will update the cache but 
// lets make it to be a toy and display a message like privilleged view
import Footer from "@/app/(components)/Footer";
import SuspenseFooter from "@/app/(components)/SuspenseFooter";
import { headers } from "next/headers";


export default async function FullPage() {
    let userCookie = await cookies();
    let actualCookieValue = JSON.parse(userCookie.get('sessionInfo').value);
    let userId = actualCookieValue.userId;
    let role = actualCookieValue.role || "user";


    if (!(role === 'kitchen' || role === 'admin')){
        return (
            <div>
                Sorry You Can't Access this page because of your role
            </div>
        )
    }


    return (
        <div>
            Welcome to the kitchen role
        </div>
    )
}