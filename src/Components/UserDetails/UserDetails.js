import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetails = ({ getDataUserDetails }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    getDataUserDetails(data);
    toast("Your Data saved please go the next step");
    navigate("/loanDetails");
    e.target.reset();
  };
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
          placeholder="GST No"
          class="input input-bordered w-full max-w-xs"
          type="number"
          required
          {...register("gstNo")}
        />
        <input
          placeholder="Address"
          class="input input-bordered w-full max-w-xs"
          type="text"
          {...register("address")}
          required
        />
        <input
          className="btn bg-sky-700 hover:bg-sky-800 border-0 w-36 mt-4 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default UserDetails;
