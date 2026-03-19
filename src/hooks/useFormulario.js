import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  role: z.string().min(1, "Selecciona un rol"),
  stack: z.array(z.string()).min(1, "Selecciona al menos una tecnología"),
  experience: z.string().min(1, "Selecciona experiencia"),
  tools: z.array(z.string()).optional(),
  difficulties: z.array(z.string()).optional(),
  deploy: z.string().optional(),
  comments: z.string().optional(),
});

export default function useFormulario() {
  return useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      stack: [],
      experience: "",
      tools: [],
      difficulties: [],
      deploy: "",
      comments: "",
    },
  });
}