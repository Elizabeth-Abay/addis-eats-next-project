'use client'
// what if we make this a client component and make it do a fetch for a route handler
import OrderHistoryList from "./components/OrdersList";
import useSWR from 'swr';
import { fetcher } from "../fetcher";

export default  function Page(){
    // this is a server component but we need to call the order histroy

    const { data  , error , isLoading } = useSWR('https://addis-eats-next-project.vercel.app/my-orders' , fetcher)

    // console.log('data that came');
    // console.log(data)

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12 text-zinc-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600 mr-2"></div>
                Loading order history...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12 text-red-600 bg-red-50 rounded-2xl border border-red-200">
                <p className="font-semibold">Failed to load orders.</p>
                <p className="text-sm">{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <OrderHistoryList orders={data}/>
        </div>
    )
}