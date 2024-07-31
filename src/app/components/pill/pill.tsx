import '@/app/components/pill/pill.scss';
import Link from 'next/link';

export function Pill({ text, color, size = 'regular', href }: { text: string, color?: string, size?: 'regular' | 'small', href: string }) {
  return (
    <Link className={`pill color-${color} pill--${size}`} href={href}>
      {text}
    </Link>
  );
}
