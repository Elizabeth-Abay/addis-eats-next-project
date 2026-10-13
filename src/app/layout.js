import { Suspense } from "react";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";

export default function RootLayout({children}){
    return(
        <html lang="en" >
            <body>
                <Header/>
                <main>{children}</main>
                <Suspense>
                    <Footer/>
                </Suspense>
            </body>
        </html>
    )
}