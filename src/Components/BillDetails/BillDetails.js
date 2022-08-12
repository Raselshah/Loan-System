import React from "react";
import { useForm } from "react-hook-form";

const BillDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-4">
      <h2 className="text-center text-2xl m-2">
        Please Enter Your Loan Application details
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Loan amount"
          type="number"
          class="input input-bordered w-full max-w-xs"
          {...register("loanAmount", { required: true })}
        />
        <input
          placeholder="Interest rate"
          class="input input-bordered w-full max-w-xs"
          type="number"
          required
          {...register("interestRate")}
        />
        <input
          placeholder="Loan tenure"
          class="input input-bordered w-full max-w-xs"
          type="number"
          {...register("loanTenure")}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default BillDetails;
