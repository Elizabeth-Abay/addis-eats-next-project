import AuthForm from "./components/authForm";
import WelcomePart from "./components/WelcomePart";
import './style/style.css'

export default function Page(){
    return (
        <div className="auth-page-wrapper">
            <WelcomePart/>

            <AuthForm/>
        </div>
    )
}