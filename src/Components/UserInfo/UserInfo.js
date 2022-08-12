import React from "react";
import { useForm } from "react-hook-form";

const UserInfo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-4">
      <h2 className="text-center text-2xl m-2">
        Please Enter Your Personal details
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="First name"
          class="input input-bordered w-full max-w-xs"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Last name"
          class="input input-bordered w-full max-w-xs"
          {...register("lastName", { required: true, maxLength: 10 })}
        />
        <input
          placeholder="age"
          class="input input-bordered w-full max-w-xs"
          type="number"
          {...register("age")}
          required
        />
        <input
          placeholder="Mobile No."
          class="input input-bordered w-full max-w-xs"
          type="number"
          {...register("mobileNumber")}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserInfo;
