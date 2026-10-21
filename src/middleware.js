// this middleware - I want it to take in the requests 

import { NextResponse } from "next/server";

export function middleware(req) {

    console.log(req)
    // // console.log('Middleware being called')
    // take the request and check the pathname
    // some routes are protected others aren't
    // we can have the matcher config to not include the paths /login and /signup

    // the protected routes are /kitchen , /check-out 
    const { pathname } = req.nextUrl;
    // // console.log(`Pathname for that url ${pathname}`);


    // req.cookies.get()
    const sessionCookie = req.cookies.get('sessionInfo');
    
    
    
    if (!sessionCookie) return NextResponse.redirect(new URL('/auth', req.url)); // the menu and specials pages are not protected
    
    let sessionObj = JSON.parse(sessionCookie.value);
    // // console.log('Session Object');
    // // console.log(sessionObj)
    // then check the role and the path the user is trying to access
    
    // to pass information like userId to the pages
    // u wld create Headers(req.headers) and then set the new thing on that
    // then in the pages u can read the headers

    const requestHeader = new Headers(req.headers);
    requestHeader.set('userId' , sessionObj.userId);
    requestHeader.set('role' , sessionObj.role );
    requestHeader.set('cookieId' , sessionObj.uniqueId);

    // users can't access the kitchen route
    if (sessionObj.role === 'user' && pathname === '/kitchen') return NextResponse.json(
        {
            success : false,
            message : 'Forbidden: No session found'
        } , 
        { status : 403 }
    )


    return NextResponse.next({
        request : {
            headers : requestHeader
        }
    })

    
}


// this means this middleware will run in those paths
export const config = {
    matcher: [
        '/kitchen', '/checkout-page', '/order-history' , '/cart'
    ],
};