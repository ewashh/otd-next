import '@/app/components/main-nav/main-nav.scss';
import { Button } from '../button/button';
import Link from 'next/link';
import logo from '../../../../public/images/otd-logo.svg'
import Image from 'next/image';
import Hamburger from '../hamburger/hamburger';
import { Input } from '../input/input';

export default function MainNav() {
  return (
    <nav className="main-nav">
      <div className="main-nav__inner mobile">
        <div className="main-nav__top">
          <a href="/" className="main-nav__logo">
            <Image src={logo} alt="OTD"></Image>
          </a>
          <Hamburger>
            <ul>
              <li><Link href="/directory">Directory</Link></li>
              <li><Link href="/submit-a-tool">Submit a tool</Link></li>
              <li><Link href="/">Log in</Link></li>
              <li><Button text="Sign up" size="small"></Button></li>
            </ul>
          </Hamburger>
        </div>
        <input type="text" placeholder="Search..." className="search-input"></input>
      </div>
      <ul className="main-nav__list desktop">
        <div>
          <li><Link href="/directory">Directory</Link></li>
          <li><Link href="/submit-a-tool">Submit a tool</Link></li>
        </div>
        <li>
          <a href="/" className="main-nav__logo">
            <Image src={logo} alt="OTD"></Image>
          </a>
        </li>
        <div>
          <li><Input type="text" size="small" placeholder="Search..." id="nav-search-input" value="" /></li>
          <li><Link href="/">Log in</Link></li>
          <li><Button text="Sign up" size="small"></Button></li>
        </div>
      </ul>
    </nav>
  );
}
