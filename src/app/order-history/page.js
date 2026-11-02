'use client';

import OrderHistoryList from "./components/OrdersList";
import useSWR from 'swr';
import { fetcher } from "../fetcher";
import './style/style.css';

export default function Page() {
    const { data, error, isLoading } = useSWR('https://addis-eats-next-project.vercel.app/my-orders', fetcher);


    
    if (isLoading) {
        return (
        <div className="history-page-container">
            <div className="history-loading">
            <div className="spinner"></div>
            <span>Loading order history...</span>
            </div>
        </div>
        );
    }

    if (error) {
        return (
        <div className="history-page-container">
            <div className="history-error">
            <p className="history-error-title">Failed to load orders</p>
            <p className="history-error-sub">{error.message}</p>
            </div>
        </div>
        );
    }

    return (
        <div className="history-page-container">
        <OrderHistoryList orders={data} />
        </div>
    );
}