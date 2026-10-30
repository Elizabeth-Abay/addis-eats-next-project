// here the component will load the pages of orders
"use client"

import { LineChart , Line,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer} from "recharts";

export default function Pager({seenOrders}){
    
    // console.log("loading pager");
    // console.log("seen orders for pagers")
    // console.log(seenOrders)

    return (
        // else fetch the amount of orders according to the page 
        // and then display the orders from that index for now

        // from the page to the last
        <div>
            <h3>Order Grand Totals</h3>
            <ResponsiveContainer width="100%" height="300">
                <LineChart data={seenOrders}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" label={{ value: 'Order ID', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Grand Total ($)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="grandTotal" stroke="#2563EB" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        
        

    )
}