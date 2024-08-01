import '@/app/components/button/button.scss';
import Link from 'next/link';

export function Button({ text, size = 'regular', href }: { text: string, size?: 'regular' | 'small' | 'big', href?: string }) {
  return (
    <Link className={`button button--${size}`} href={href ? href : ''}>
      {text}
    </Link>
  );
}
