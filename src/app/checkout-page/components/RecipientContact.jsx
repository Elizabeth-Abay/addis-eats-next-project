"use client"
import useOrderStore from '@/app/(stores)/OrderStore';
import { useState } from 'react';

export default function RecipientContact() {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    let setReceipientInfo = useOrderStore(state => state.setReceipientInfo)


    let onSubmit = (e) =>{
        e.preventDefault();

        setReceipientInfo({ fullName, phone });
    }


    return (
        <div className="recipient-card">
            {/* Header Section */}
            <div className="recipient-header">
                <div className="header-icon-badge">
                <svg
                    className="user-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                </div>

                <div className="header-text">
                <h2>Recipient Contact</h2>
                <p>For delivery updates & Telegram OTP</p>
                </div>
            </div>

            {/* Form Fields */}
            <div className="form-fields">
                {/* Full Name Field */}
                <div className="input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <form onSubmit={onSubmit}>
                        <div className="input-wrapper">
                            <input
                                id="fullName"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter full name"
                            />
                            <svg
                                className="field-icon check-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>   

                        {/* Phone Field */}
                        <div className="input-group">
                            <label htmlFor="phone">Phone (Calls & Telegram SMS)</label>
                            <div className="input-wrapper">
                                <div className="country-prefix">ET</div>
                                <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+251..."
                                />
                                <svg
                                className="field-icon sim-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="10 17 15 12 10 7" />
                                <line x1="15" y1="12" x2="3" y2="12" />
                                </svg>
                            </div>
                        </div> 

                        <button type="submit" className="done-btn">
                            Done
                        </button> 
                    </form>
                </div>

                
            </div>

        </div>
    );
}