// the client component
// this is where the bar chart of the orders from 
// organized by the region will get passed to

"use client"
import {BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis , Bar} from "recharts";


export default function RevenueChart({data}){
    // console.log("Data passed to revenue chart")
    // console.log(data)

    
    return (
        <div>
            <ResponsiveContainer width="100%" height="300">
                {/* once the data is organized set it up to the BarChart */}
                {/* maybe pass each data */}
                <BarChart  data={data}>
                    {/* the data passed needs to be an array of objects */}
                    {/* the dataKey that you passed here should have the same properties as the dataKey u passed as x and yaxis */}
                    <XAxis dataKey="subCity"/>
                    <YAxis dataKey="revenue"/>
                    <Tooltip/>

                    <Bar dataKey="revenue" fill="rgb(3, 49, 17)"/>

                </BarChart>

            </ResponsiveContainer>
        </div>

    )
}