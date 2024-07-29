import '@/app/components/button/button.scss';

export function Button({ text, size = 'regular' }: { text: string, size?: 'regular' | 'small' | 'big' }) {
  return (
    <a className={`button button--${size}`}>
      {text}
    </a>
  );
}
