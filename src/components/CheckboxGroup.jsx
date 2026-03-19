export default function CheckboxGroup({
  label,
  name,
  options,
  register,
}) {
  return (
    <div>
      <p className="font-medium mb-2">{label}</p>

      <div className="grid grid-cols-2 gap-2">
        {options.map((item) => (
          <label key={item} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={item}
              {...register(name)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}