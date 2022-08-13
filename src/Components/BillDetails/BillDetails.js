import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const axios = require("axios").default;

const BillDetails = ({ userDetails, userData }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const allData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      age: userData.age,
      mobileNumber: userData.mobileNumber,
      businessName: userDetails.businessName,
      address: userDetails.address,
      gstNo: userDetails.gstNo,
      loanAmount: data.loanAmount,
      interestRate: data.interestRate,
      loanTenure: data.loanTenure,
    };

    axios
      .post("https://fathomless-shore-03190.herokuapp.com/userLoan", allData)
      .then((res) => {
        toast("Your Bill payment successfully");
        console.log(res.data);
      });

    e.target.reset();
    console.log(allData);
  };
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
        <input
          className="btn bg-sky-700 hover:bg-sky-800 border-0 w-36 mt-4 "
          type="submit"
          value="SUBMIT TO LOAN"
        />
      </form>
    </div>
  );
};

export default BillDetails;
