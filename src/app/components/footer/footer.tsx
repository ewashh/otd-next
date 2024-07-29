import '@/app/components/footer/footer.scss';
import Link from 'next/link';

export default function MainFooter() {
  return (
    <nav className="main-footer">
      <ul>
          <li><Link href="/credits">Credits</Link></li>
          <li><a href="/">Online Tool Dorectory</a></li>
      </ul>
    </nav>
  );
}
