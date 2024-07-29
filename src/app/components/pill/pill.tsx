import '@/app/components/pill/pill.scss';

export function Pill({ text, color, size = 'regular' }: { text: string, color?: string, size?: 'regular' | 'small' }) {
  return (
    <a className={`pill color-${color} pill--${size}`}>
      {text}
    </a>
  );
}
