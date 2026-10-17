import LogInForm from "./components/logInForm";
import SignUpForm from "./components/signUpForm";
import WelcomePart from "./components/WelcomePart";
import './style/style.css'

export default function Page(){
    return (
        <div>
            <WelcomePart/>

            <SignUpForm/>
            <LogInForm />
        </div>
    )
}