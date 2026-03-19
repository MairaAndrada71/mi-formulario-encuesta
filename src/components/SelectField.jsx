export default function SelectField({
  label,
  name,
  register,
  options,
  error,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <select
        {...register(name)}
        className="border rounded-lg p-2"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}