import '@/app/components/textarea/textarea.scss';
import { Label } from '../label/label';

interface TextAreaProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  size?: 'regular' | 'small',
  theme?: 'light' | 'dark',
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({ label, id, placeholder, value, size='regular', theme='light', onChange, onFocus, onBlur }: TextAreaProps) {
  return (
    <div className="textarea">
      <Label text={label} id={id} />
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={3}
        className={`size--${size} theme--${theme}`}
      />
    </div>
  );
}
