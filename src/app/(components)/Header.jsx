import { RESTAURANT_NAME } from "../(constants)/variable";
import CartButton from "./CartButton";
import NameCircle from "./nameCircle";
import './style.css'



export default function Header() {
    return (
        <header className="header-container">
            <h1 className="header-title">{RESTAURANT_NAME}</h1>
            
            <div className="header-actions">
                <CartButton />
                <NameCircle />
            </div>
        </header>
    );
}