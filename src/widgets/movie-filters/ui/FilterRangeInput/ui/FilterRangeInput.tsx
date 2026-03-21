interface Props {
  rangeValue: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FilterRangeInput({ rangeValue, handleChange }: Props) {
  return (
    <>
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        style={{ cursor: "pointer" }}
        value={rangeValue}
        onChange={handleChange}
      />
      <div>{rangeValue}</div>
    </>
  );
}
