interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ type, id, placeholder, value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="submit-tool__name">Name</label>
      <input
        type="text"
        id="submit-tool__name"
        placeholder="Online Tool Directory"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
