export default function InputField({
  label,
  name,
  register,
  error,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <input
        {...register(name)}
        {...props}
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}