type Props = {
  value: string;
  onFilter: (name: string) => void;
};

export const FilterName = ({ value, onFilter }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
