import '@/app/components/footer/footer.scss';
import Link from 'next/link';

export default function MainFooter() {
  return (
    <nav className="main-footer">
      <ul>
          <li><Link href="/credits">Credits</Link></li>
          <li><a href="/">© 2021 - 2024, Online Tool Directory</a></li>
      </ul>
    </nav>
  );
}
