import '@/app/components/input/input.scss';
import { Label } from '../label/label';

interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input({ label, type, id, placeholder, value, onChange, onFocus, onBlur }: InputProps) {
  return (
    <div className="input">
      <Label text={label} id={id} />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
