// this is a page where staff people could set up amounts
// so this user action will update the cache but 
// lets make it to be a toy and display a message like privilleged view
import Footer from "@/app/(components)/Footer";
import SuspenseFooter from "@/app/(components)/SuspenseFooter";
import { headers } from "next/headers";


export default async function FullPage() {
    let headerrs = await headers();
    let cookieString = headerrs.get('cookie')
            

    // page level security
    
    const cookies = cookieString.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});

    let userId = null;
    let role = null

    if (cookies.sessionInfo) {
        // 2. Decode URL encoding (e.g., %7B -> {, %22 -> ", etc.)
        const decodedSession = decodeURIComponent(cookies.sessionInfo);
        
        // 3. Parse the JSON string into an object
        const sessionObj = JSON.parse(decodedSession);
        
        // 4. Grab the userId
        userId = sessionObj.userId;
        role = sessionObj.role;
    }

    
    // page level security 
    if (!(role === 'kitchen' || role === 'admin')){
        // // console.log("Returning the role")
        return (
            <div>
                Sorry You Can't Access this page because of your role
            </div>
        )
    }


    // this is page level security
    return (
        <div>
            Welcome to the kitchen role
        </div>
    )
}