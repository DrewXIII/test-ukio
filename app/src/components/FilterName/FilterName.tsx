type Props = {
  onFilter: (name: string) => void;
};

export const FilterName = ({ onFilter }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
