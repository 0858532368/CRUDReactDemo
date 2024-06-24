import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string().optional(),
});
const Login = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => onAdd(data))}>
        <div className="mb3">
          <label htmlFor="">tittle</label>
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="mb3">
          <label htmlFor="">price</label>
          <input
            className="form-control"
            type="number"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="mb3">
          <label htmlFor="">description</label>
          <input
            className="form-control"
            type="text"
            {...register("description")}
          />
        </div>
        <div className="mb3">
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
