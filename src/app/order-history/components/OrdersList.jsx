'use client'
import React from 'react';
import HistoryContainer from './historyContainer';

export default function OrderHistoryList({ orders }) {
    // // console.log('order that came from here')
    // // console.log(orders)
    
    // If there are no orders yet
    if (!orders || orders.length === 0) {
        return (
            <div className="text-center py-12 text-zinc-500 bg-zinc-50 rounded-2xl border border-dashed border-zinc-300">
                <p className="text-lg font-medium">No order history found.</p>
                <p className="text-sm">Your past orders will appear here once you place them!</p>
            </div>
        );
    }

    let ordersLen = orders.length

    return (
        // Scrollable container with a custom max height and smooth scrolling
        <div className="max-h-[600px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {orders.map((order, index) => (
                <HistoryContainer key={index} ordersLength={ordersLen} index={index} order={order}/>
            ))}
        </div>
    );
}