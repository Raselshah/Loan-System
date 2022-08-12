import React from "react";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-4">
      <h2 className="text-center text-2xl m-2">
        Please Enter Your Business details
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Business name"
          class="input input-bordered w-full max-w-xs"
          {...register("businessName", { required: true, maxLength: 40 })}
        />
        <input
          placeholder="GST no"
          class="input input-bordered w-full max-w-xs"
          type="number"
          required
          {...register("gstNo")}
        />
        <input
          placeholder="age"
          class="input input-bordered w-full max-w-xs"
          type="number"
          {...register("age")}
          required
        />
        <input
          placeholder="Address"
          class="input input-bordered w-full max-w-xs"
          type="text"
          {...register("address")}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserDetails;
