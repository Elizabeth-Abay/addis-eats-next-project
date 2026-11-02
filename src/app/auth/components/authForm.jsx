'use client';

import { useState } from "react";
import SignUpForm from "./signUpForm";
import LogInForm from "./logInForm";

export default function AuthForm() {
    const [signUpEnabled, setSignUp] = useState(true);

    return (
        <div className="auth-wrapper-card">
        {/* Toggle Button Container */}
        <div className="auth-toggle-container">
            <button
            type="button"
            onClick={() => setSignUp(true)}
            className={`auth-toggle-btn ${signUpEnabled ? 'active' : ''}`}
            >
            Create Account
            </button>

            <button
            type="button"
            onClick={() => setSignUp(false)}
            className={`auth-toggle-btn ${!signUpEnabled ? 'active' : ''}`}
            >
            Sign In
            </button>
        </div>

        {/* Form Display Section */}
        <div>
            {signUpEnabled ? <SignUpForm /> : <LogInForm />}
        </div>
        </div>
    );
}