import Footer from "../(components)/Footer";
import SuspenseFooter from "../(components)/SuspenseFooter";
import StepOne from "./page/stepOne";
import './style/style.css'

export default function Page(){
    return (
        <div>   
            <SuspenseFooter/>
            <StepOne/>
        </div>
    )
}