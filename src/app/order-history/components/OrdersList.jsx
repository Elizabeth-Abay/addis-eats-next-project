'use client';

import React from 'react';
import HistoryContainer from './historyContainer';

export default function OrderHistoryList({ orders }) {
    if (!orders || orders.length === 0) {
        return (
        <div className="history-empty">
            <p className="history-empty-title">No order history found</p>
            <p className="history-empty-sub">Your past orders will appear here once you place them!</p>
        </div>
        );
    }

    const ordersLen = orders.length;

    return (
        <div className="history-list">
        {orders.map((order, index) => (
            <HistoryContainer
            key={index}
            ordersLength={ordersLen}
            index={index}
            order={order}
            />
        ))}
        </div>
    );
}