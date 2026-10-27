'use client'

import { signUp } from "@/app/(actions)/authActs";
import { useRouter } from "next/navigation";
import {useState , useEffect } from "react"

export default function SignUpForm(){
    let router = useRouter()
    let [ phone , setPhone] = useState('');
    let [ name , setName ] = useState('');
    let [email , setEmail ] = useState('');
    let [ password , setPassword] = useState('');
    let [authMethod, setAuthMethod] = useState("phone");
    let [showPassword, setShowPassword] = useState(false);
    let [errors, setErrors] = useState({});


    let [ previousUrl , setPreviousUrl ] = useState('/')


    // to set the previous url for visiting
    useEffect(() => {
    // Reads the URL of the page that navigated to this one
        if (document.referrer) {
            setPreviousUrl(document.referrer);
        }
    }, []);


    const handleTabSwitch = (method) => {

        setAuthMethod(method);
        setErrors({});
    };

    const handleSignUp = async () => {
        try {
            console.log('sign up button clicked')
            

            let formData = new FormData() 
            formData.append('name' , name)
            formData.append('password' , password)


            authMethod === "phone" ? 
                formData.append('phone' , phone)
                :
                formData.append('email' , email);

            // // console.log('formData');
            // // console.log(formData);


            let result = await signUp(formData);

            // // console.log('result is');
            // // console.log(result)

            if (!result.success) throw new Error('Unsuccessful log in');

            let { name : userName } = result;
            
            console.log('sign up successful')
            console.log(name)
            console.log(userName)

            console.log(previousUrl)

            localStorage.setItem('name' , userName);

            // then set the user to the cart page
            (previousUrl === 'http://localhost:3000/auth') ? router.push('/') : router.push(previousUrl)

            console.log('sign up successful')
        } catch (err){
            console.log('Error happened during sign up');
            console.log(err)
            
            setErrors(prev => {return { ...prev , logInErr : err.message}})
        }

    }


    return (
        <div className="auth-card-container">
            <div className="auth-divider">
                <span className="auth-divider-text">OR WITH PHONE / EMAIL</span>
            </div>

            <div className="auth-tab-group" role="tablist">
                <button
                type="button"
                role="tab"
                aria-selected={authMethod === "phone"}
                className={`auth-tab-btn ${authMethod === "mobile" ? "active" : ""}`}
                onClick={() => handleTabSwitch("phone")}
                >
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
                    <line x1="11" y1="18" x2="13" y2="18" />
                </svg>
                <div className="tab-text">
                    <span className="tab-title">Ethiopian</span>
                    <span className="tab-subtitle">Mobile (+251)</span>
                </div>
                </button>

                <button
                type="button"
                role="tab"
                aria-selected={authMethod === "email"}
                className={`auth-tab-btn ${authMethod === "email" ? "active" : ""}`}
                onClick={() => handleTabSwitch("email")}
                >
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="tab-single-title">Email Address</span>
                </button>
            </div>

            <form action={handleSignUp} className="auth-form-fields" noValidate>
                {authMethod === "phone" ? (
                    <div className="form-group">
                    <div className="label-row">
                    <label htmlFor="mobileNumber" className="field-label">Mobile Number</label>
                    <span className="carrier-sublabel">Ethio Telecom / Safaricom</span>
                    </div>

                    <div className={`input-box mobile-input-box ${errors.mobileNumber ? "input-error" : ""}`}>
                    <div className="country-badge">
                        <span className="ethiopia-flag">🇪🇹</span>
                        <span className="country-code">+251</span>
                        <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                    <input
                        id="mobileNumber"
                        type="tel"
                        name="phone"
                        className="input-field"
                        placeholder="91123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        aria-invalid={Boolean(errors.mobileNumber)}
                    />
                    </div>
                    {errors.mobileNumber && (
                    <span className="error-message">{errors.mobileNumber}</span>
                    )}
                </div>
                ) : (
                <div className="form-group">
                    <div className="label-row">
                    <label htmlFor="email" className="field-label">Email Address</label>
                    </div>

                    <div className={`input-box ${errors.email ? "input-error" : ""}`}>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="input-field full-padding"
                        placeholder="example@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                    />
                    </div>
                    {errors.email && (
                    <span className="error-message">{errors.email}</span>
                    )}
                </div>
                )}

                <div className="form-group">
                    <div className="label-row">
                    <label htmlFor="name" className="field-label">Name</label>
                    </div>

                    <div className={`input-box ${errors.email ? "input-error" : ""}`}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="input-field full-padding"
                        placeholder="example@domain.com"
                        value={name}
                        onChange={(e) => {
                            // // console.log(`Setting the name ${e.target.value}`)
                            setName(e.target.value)
                        }}
                        aria-invalid={Boolean(errors.name)}
                    />
                    </div>
                    {errors.name && (
                    <span className="error-message">{errors.name}</span>
                    )}
                </div>

                <div className="form-group">
                <label htmlFor="password" className="field-label">Secret Password / PIN</label>
                <div className={`input-box password-input-box ${errors.password ? "input-error" : ""}`}>
                    <svg className="field-icon left-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>

                    <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    className="input-field password-field"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={Boolean(errors.password)}
                    />

                    <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                    {showPassword ? (
                        <svg className="field-icon right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    ) : (
                        <svg className="field-icon right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                        </svg>
                    )}
                    </button>
                </div>
                {errors.password && (
                    <span className="error-message">{errors.password}</span>
                )}
                </div>

                <button type="submit" className="done-btn">
                Done
                </button>
            </form>
        </div>
    );
}