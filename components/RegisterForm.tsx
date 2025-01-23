"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input className="input" placeholder="email" {...register("email")} />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <input
        className="input"
        placeholder="password"
        {...register("password")}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}

      <button type="submit">submit!</button>
    </form>
  );
}
