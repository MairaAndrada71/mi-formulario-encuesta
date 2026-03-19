import useFormulario from "./hooks/useFormulario";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import CheckboxGroup from "./components/CheckboxGroup";
import RadioGroup from "./components/RadioGroup";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormulario();

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulario enviado 🚀");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Encuesta Fullstack Developer
        </h1>

        <InputField
          label="Nombre"
          name="name"
          register={register}
          error={errors.name?.message}
          placeholder="Tu nombre"
        />

        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="Tu email"
        />

        <SelectField
          label="Rol"
          name="role"
          register={register}
          error={errors.role?.message}
          options={[
            { value: "", label: "Seleccionar rol" },
            { value: "frontend", label: "Frontend" },
            { value: "backend", label: "Backend" },
            { value: "fullstack", label: "Fullstack" },
          ]}
        />

        <CheckboxGroup
          label="Tecnologías"
          name="stack"
          register={register}
          options={[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "MongoDB",
            "SQL",
          ]}
        />

        <RadioGroup
          label="Experiencia"
          name="experience"
          register={register}
          options={["Junior", "Semi Senior", "Senior"]}
        />

        <CheckboxGroup
          label="Herramientas"
          name="tools"
          register={register}
          options={["Git", "GitHub", "VS Code", "Postman"]}
        />

        <CheckboxGroup
          label="Dificultades"
          name="difficulties"
          register={register}
          options={[
            "Arquitectura",
            "Testing",
            "APIs",
            "Deploy",
          ]}
        />

        <SelectField
          label="Deployment"
          name="deploy"
          register={register}
          options={[
            { value: "", label: "Seleccionar" },
            { value: "vercel", label: "Vercel" },
            { value: "netlify", label: "Netlify" },
            { value: "aws", label: "AWS" },
          ]}
        />

        <textarea
          {...register("comments")}
          placeholder="Comentarios..."
          className="border p-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}