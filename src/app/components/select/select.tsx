import '@/app/components/select/select.scss';
import { Label } from "../label/label";

interface BasicSelectProps {
  label: string;
  options: { value: string; label: string }[];
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

const BasicSelect: React.FC<SelectProps> = ({ label, options, id, value, onChange, onFocus, onBlur }) => {
  return (
    <div className="select">
      <Label text={label} id={id} />
      <select
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BasicSelect;
