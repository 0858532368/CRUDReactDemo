import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(6),
  password: z.string().optional(),
});
const Register = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data) => {
    const newData = axios.post(`http://localhost:3000/register`);
    alert("dang ky thanh cong");
    Navigate("/login");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb3">
          <label htmlFor="">email</label>
          <input
            className="form-control"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="mb3">
          <label htmlFor="">password</label>
          <input
            className="form-control"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="mb3">
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
