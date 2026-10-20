// the client component
// this is where the bar chart of the orders from 
// organized by the region will get passed to

"use client"
import {BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis , Bar} from "recharts";


export default function RevenueChart({data}){
    return (
        <div>
            <ResponsiveContainer width="100%" height="300">
                {/* once the data is organized set it up to the BarChart */}
                <BarChart  data={data}>
                    <XAxis dataKey="subCity"/>
                    <YAxis dataKey="revenue"/>
                    <Tooltip/>

                    <Bar dataKey="revenue" fill="rgb(3, 49, 17)"/>

                </BarChart>

            </ResponsiveContainer>
        </div>

    )
}