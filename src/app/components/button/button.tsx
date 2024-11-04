import '@/app/components/button/button.scss';
import Link from 'next/link';

interface ButtonProps {
  text: string,
  size?: 'regular' | 'small' | 'big',
  style?: 'black' | 'white',
  href?: string
}

export function Button({ text, size = 'regular', href, style='black' }: ButtonProps ) {
  return (
    <Link className={`button size--${size} style--${style}`} href={href ? href : ''}>
      {text}
    </Link>
  );
}
