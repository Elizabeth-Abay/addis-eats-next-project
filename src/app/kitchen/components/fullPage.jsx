import { cookies } from "next/headers";


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