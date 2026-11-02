// this middleware - I want it to take in the requests 

import { NextResponse } from "next/server";

export function middleware(req) {

    // console.log("Request from the middleware")
    // console.log(req)
    // request has got cookies property
    // it contains the protocol , pathname 
    // cookies - { sessionInfo : { name : "sessionInfo" , value : {uniqueId : sthg , role : sthg , userId : sthg}}}


    // take the request and check the pathname
    // some routes are protected others aren't
    // we can have the matcher config to not include the paths /login and /signup

    // the protected routes are /kitchen , /check-out 
    const { pathname } = req.nextUrl;

    // console.log("pathname is")
    // console.log(pathname)


    // req.cookies.get()
    const sessionCookie = req.cookies.get('sessionInfo');


    // we can use this but since it is a middleware async may be bad for performance
    // const cookiesFromCookie = await cookies();

    // it is an object - same as the request cookies
    // { name , value } - so parse the value Json.parse

    
    
    if (!sessionCookie) return NextResponse.redirect(new URL('/auth', req.url)); // the menu and specials pages are not protected
    
    let sessionObj = JSON.parse(sessionCookie['value']);
    // console.log("session obj")
    // console.log(sessionObj)
    // // // console.log('Session Object');
    // // // console.log(sessionObj)
    // then check the role and the path the user is trying to access
    
    // to pass information like userId to the pages
    // u wld create Headers(req.headers) and then set the new thing on that
    // then in the pages u can read the headers

    const requestHeader = new Headers(req.headers);
    requestHeader.set('cookiesFromMiddleware' , sessionCookie['value']);

    // the set in the request wants to have string key and value
    // await headers() and do headers.get('cookiesFromMiddleware') and parse and use that


    // middleware can provide route protection
    // users can't access the kitchen route

    // the cookie will hold role

    if (sessionObj.role === 'user' && (pathname === '/kitchen' || pathname === '/orders')) return NextResponse.json(
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
        // paths
        // '/' , '/menu' , log in and sign up server actions are the ones accessible without cookies ,
        '/kitchen', '/checkout-page', '/order-history' , '/cart' , '/dashboard' , '/kitchen' , '/order-history' , '/orders' , '/receipt'
    ],
};


// * what middleware can do
// * see the request , decode cookies and set
// * them up for next routes through the request
// * but eventhough it sees the incoming request for server actions
// * it deals with routing based on authorization , since server actions 
// * have hidden urls u can't check for the role in the middleware and have automatic redirection
// * but the matcher will prevent the middleware from accessing the 
// * actual request interception for the request sent to the server action
// * that is why we need second layer in the server actions


