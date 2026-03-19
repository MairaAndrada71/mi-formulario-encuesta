export default function RadioGroup({
  label,
  name,
  options,
  register,
}) {
  return (
    <div>
      <p className="font-medium mb-2">{label}</p>

      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="radio"
              value={opt}
              {...register(name)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}