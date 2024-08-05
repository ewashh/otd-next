import '@/app/components/main-nav/main-nav.scss';
import { Button } from '../button/button';
import Link from 'next/link';
import logo from '../../../../public/images/otd-logo.svg'
import Image from 'next/image';

export default function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <div>
          <li><Link href="/directory">Directory</Link></li>
          <li><a href="/">Submit a tool</a></li>
        </div>
        <li>
          <a href="/" className="main-nav__logo">
            <Image src={logo} alt="OTD"></Image>
          </a>
        </li>
        <div>
          <li><input type="text" placeholder="Search..." className="search-input"></input></li>
          <li><a href="/">Log in</a></li>
          <li><Button text="Sign up" size="small"></Button></li>
        </div>
      </ul>
    </nav>
  );
}
