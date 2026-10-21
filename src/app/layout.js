import { Suspense } from "react";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";

export const metadata = {
    title: 'Addis Eats - Delicious Local Food',
    description: 'Order your favorite meals and track your order history instantly.',
    openGraph: {
        title: 'Addis Eats - Delicious Local Food',
        description: 'Order your favorite meals and track your order history instantly.',
        url: 'http://localhost:3000',
        siteName: 'Addis Eats',
        images: [
        {
            url: 
            'https://www.google.com/imgres?q=doro%20wat%20image&imgurl=https%3A%2F%2Fcookingwithclaudy.com%2Fwp-content%2Fuploads%2F2024%2F12%2F20241112124418_IMG_8244_copy_1200x1200_3.jpg&imgrefurl=https%3A%2F%2Fcookingwithclaudy.com%2Fdoro-wat-ethiopian-spicy-chicken-stew%2F&docid=AMXtY8E59qDbPM&tbnid=KThc2AXC9GaFRM&vet=12ahUKEwiw3tOkucSXAxWhgf0HHcrgOrUQnPAOegQIOBAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwiw3tOkucSXAxWhgf0HHcrgOrUQnPAOegQIOBAA', 
            width: 1200,
            height: 630,
            alt: 'Addis Eats Preview Image',
        },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Addis Eats - Delicious Local Food',
        description: 'Order your favorite meals and track your order history instantly.',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvrVqKtIjbqVCVkD0hsFzW5iFvp_gguPRWtNY0sf7JRWEmySYLY-UqNI&s=10'],
    },
};

export default function RootLayout({children}){
    return(
        <html lang="en" >
        <head>
            <meta property="og:title" content="Your Catchy Page Title Here" />
            <meta property="og:description" content="A brief, compelling summary of what this page is about." />
            <meta property="og:image" content="https://www.google.com/imgres?q=doro%20wat%20image&imgurl=https%3A%2F%2Fcookingwithclaudy.com%2Fwp-content%2Fuploads%2F2024%2F12%2F20241112124418_IMG_8244_copy_1200x1200_3.jpg&imgrefurl=https%3A%2F%2Fcookingwithclaudy.com%2Fdoro-wat-ethiopian-spicy-chicken-stew%2F&docid=AMXtY8E59qDbPM&tbnid=KThc2AXC9GaFRM&vet=12ahUKEwiw3tOkucSXAxWhgf0HHcrgOrUQnPAOegQIOBAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwiw3tOkucSXAxWhgf0HHcrgOrUQnPAOegQIOBAA" />
            <meta property="og:url" content="http://localhost:3000" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your Catchy Page Title Here" />
            <meta name="twitter:description" content="A brief, compelling summary." />
            <meta name="twitter:image" content="https://www.yourwebsite.com/images/preview-image.jpg" />
        </head>
            
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