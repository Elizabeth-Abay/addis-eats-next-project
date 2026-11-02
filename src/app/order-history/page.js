'use client';

import OrderHistoryList from "./components/OrdersList";
import useSWR from 'swr';
import { fetcher } from "../fetcher";
import './style/style.css';

export default function Page() {
    // const { data, error, isLoading } = useSWR('https://addis-eats-next-project.vercel.app/my-orders', fetcher);


    let data = [
  {
    "id": "ord_101",
    "date": "Nov 2, 2026, 02:15 PM",
    "payment": {
      "grandTotal": 950.00,
      "deliveryFee": 100.00
    },
    "cart": [
      {
        "id": "item_1",
        "name": "Special Doro Wat",
        "amount": 1,
        "price": 550.00,
        "customOrder": {
          "Spice Level": "Spicy",
          "Injera": "100% Teff"
        }
      },
      {
        "id": "item_2",
        "name": "Yetsom Beyaynetu",
        "amount": 1,
        "price": 300.00
      }
    ]
  },
  {
    "id": "ord_102",
    "date": "Oct 28, 2026, 07:45 PM",
    "payment": {
      "grandTotal": 1250.00,
      "deliveryFee": 150.00
    },
    "cart": [
      {
        "id": "item_3",
        "name": "Special Kitfo (Lebleb)",
        "amount": 2,
        "price": 500.00,
        "customOrder": {
          "Sides": "Extra Ayeb & Gomen"
        }
      },
      {
        "id": "item_4",
        "name": "Fresh Mango Spris Juice",
        "amount": 2,
        "price": 50.00
      }
    ]
  },
  {
    "id": "ord_103",
    "date": "Oct 15, 2026, 01:20 PM",
    "payment": {
      "grandTotal": 600.00,
      "deliveryFee": 100.00
    },
    "cart": [
      {
        "id": "item_5",
        "name": "Sizzling Beef Tibs",
        "amount": 1,
        "price": 500.00,
        "customOrder": {
          "Preparation": "Shekla Tibs"
        }
      }
    ]
  }
]

    
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