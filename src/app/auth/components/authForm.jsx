'use client'

import { useState } from "react"
import SignUpForm from "./signUpForm"
import LogInForm from "./logInForm"

export default function AuthForm(){
    let [ signUpEnabled , setSignUp ] = useState(true)

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100 my-8">
            {/* Toggle Button Container */}
            <div className="flex flex-row items-center justify-center p-1.5 bg-gray-100/80 rounded-xl gap-2 mb-6">
                <button
                    type="button"
                    onClick={() => setSignUp(true)}
                    style={{
                        flex: 1,
                        padding: '10px 0',
                        margin : '10px',
                        fontSize: '14px',
                        fontWeight: !signUpEnabled ? '600' : '500',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        backgroundColor: !signUpEnabled ? '#ffffff' : 'transparent',
                        color: !signUpEnabled ? '#111827' : '#6b7280',
                        boxShadow: !signUpEnabled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                        border: !signUpEnabled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
                    }}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                        signUpEnabled
                            ? 'bg-white text-gray-900 shadow-sm font-semibold'
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Create Account
                </button>

                <button
                    type="button"
                    style={{
                        flex: 1,
                        padding: '10px 0',
                        fontSize: '14px',
                        margin : '10px',
                        fontWeight: !signUpEnabled ? '600' : '500',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        backgroundColor: !signUpEnabled ? '#ffffff' : 'transparent',
                        color: !signUpEnabled ? '#111827' : '#6b7280',
                        boxShadow: !signUpEnabled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                        border: !signUpEnabled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
                    }}
                    onClick={() => setSignUp(false)}
                    className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                        !signUpEnabled
                            ? 'bg-white text-gray-900 shadow-sm font-semibold'
                            : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                    Sign In
                </button>
            </div>

            {/* Form Display Section */}
            <div className="transition-opacity duration-300 ease-in-out">
                {signUpEnabled ? <SignUpForm /> : <LogInForm />}
            </div>
        </div>
    )
}