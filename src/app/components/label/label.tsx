import '@/app/components/label/label.scss';

interface LabelProps {
  text: string;
  id: string;
}

export function Label({ text, id }: LabelProps) {
  return (
    <label className="label" htmlFor={id}>{text}</label>
  );
}
