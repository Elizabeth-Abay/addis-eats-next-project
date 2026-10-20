"use client"
import { SUB_CITIES } from '../../(constants)/variable';
import useOrderStore from '@/app/(stores)/OrderStore';
import useCartStore from '../../(stores)/CartStore';
import { useState } from 'react';


export default function DeliveryDestination() {
    let setDeliveryFee = useCartStore(state => state.setDeliveryFee)
    let orderDispatch = useOrderStore(state => state.setDeliveryDestination)
    const [subCity, setSubCity] = useState('Bole');
    const [houseNo, setHouseNo] = useState('Behind Edna Mall, House No. 402');
    const [landmark, setLandmark] = useState('Opposite to Boston Day Spa, entrance');

    const handleSubmit = (e) => {
        e.preventDefault();
        // based on the location update the total price
        setDeliveryFee( {deliveryFee : SUB_CITIES[subCity] , destinationPlace : subCity})

        orderDispatch({  subCity ,houseNo , landmark  });

        
    };

    return (
        <div className="delivery-card">
        {/* Header Section */}
        <div className="delivery-header">
            <div className="header-pin-badge">
            <svg
                className="pin-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
            </div>

            <div className="header-title-group">
            <h2>Delivery Destination</h2>
            <p>Addis Ababa Metropolitan Area</p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="delivery-form">
            {/* Sub-City Dropdown */}
            <div className="input-group">
            <label htmlFor="subCity">Sub-City / Neighborhood</label>
            <div className="select-wrapper">
                <select
                id="subCity"
                value={subCity}
                onChange={(e) => setSubCity(e.target.value)}
                className="custom-select"
                >
                {Array.from(Object.keys(SUB_CITIES)).map((city) => (
                    <option key={city} value={city}>
                    {city} Sub-city
                    </option>
                ))}
                </select>
                {/* Custom Arrow Icon */}
                <svg
                className="select-arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
            </div>

            {/* House No. / Street Field */}
            <div className="input-group">
            <label htmlFor="houseNo">House No. / Street</label>
            <input
                id="houseNo"
                type="text"
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
                placeholder="e.g. House No. 402"
                className="text-input"
            />
            </div>

            {/* Landmark & Gate Color Field */}
            <div className="input-group">
            <label htmlFor="landmark">Landmark & Gate Color</label>
            <div className="input-with-icon-wrapper">
                <input
                id="landmark"
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="e.g. Near Boston Day Spa"
                className="text-input"
                />
                {/* Door Icon */}
                <svg
                className="door-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                <path d="M2 20h20" />
                <circle cx="14" cy="12" r="1" />
                </svg>
            </div>
            </div>

            {/* Done / Submit Button */}
            <button type="submit" className="done-btn">
            Done
            </button>
        </form>
        </div>
    );
}