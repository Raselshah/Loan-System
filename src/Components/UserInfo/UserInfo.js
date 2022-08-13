import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserInfo = ({ getDataUserInfo }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    setUserInfo(data);
    toast("Your Data saved please go the next step");
    navigate("/userInfo");
    e.target.reset();
  };
  getDataUserInfo(userInfo);
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
          placeholder="Age"
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
        <input
          className="btn bg-sky-700 hover:bg-sky-800 border-0 w-36 mt-4 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default UserInfo;
