import '@/app/components/pill/pill.scss';
import Link from 'next/link';

export function Pill({ text, color, size = 'regular', href, active }: { text: string, color?: string, size?: 'regular' | 'small', href: string, active?: boolean }) {
  return (
    <Link className={`pill color-${color} pill--${size} pill--${active && `active`}`} href={href}>
      {text}
    </Link>
  );
}
