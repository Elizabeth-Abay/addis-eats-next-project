"use client"
import { HiOutlineFire, HiOutlineUser } from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import CartButton from "./CartButton";
import { usePathname, useRouter } from "next/navigation";


// to usePathname == we will need to make it client component


export default function Footer() {
  const router = useRouter()
  const pathname = usePathname();

  return (
    <div className="footer-nav">
      <button 
        onClick={
          () => router.replace('/')
        }
        className={`nav-link ${pathname === '/' ? 'active' : ''}`}
      >
        <HiOutlineFire className="nav-icon" />
        <span>Specials</span>
      </button>

      <button 
        onClick={
          () => router.replace('/menu')
        }
        className={`nav-link ${pathname === '/menu'  ? 'active' : ''}`}
      >
        <LuUtensilsCrossed className="nav-icon" />
        <span>Menu</span>
      </button>

      <div 
        className={`nav-link ${pathname === '/cart' ? 'active' : ''}`}
      >
        <CartButton className="nav-icon" />
        <span>Cart</span>
      </div>

      <button
        onClick={
          () => router.replace('/auth')
        } 
        className={`nav-link ${pathname === '/my-acc' ? 'active' : ''}`}
      >
        <HiOutlineUser className="nav-icon" />
        <span>Account</span>
      </button>

      <button
        onClick={
          () => router.replace('/order-history')
        } 
        className={`nav-link ${pathname === '/order-history' ? 'active' : ''}`}
      >
        <HiOutlineUser className="nav-icon" />
        <span>Orders</span>
      </button>
    </div>
  );
}