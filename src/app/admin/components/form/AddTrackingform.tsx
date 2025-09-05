import React from "react";
import Input from "../Input";
import Button from "@/components/shared/Button";

const AddTrackingForm = () => {
  return (
    <form className="w-full my-5">
      <h2 className="text-xl md:text-2xl font-bold uppercase">Add Tracking Details</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <Input
          label="Details"
          labelFor="details"
          inputType="text"
          placeholder="Enter the address"
        />
        <Input
          label="Details"
          labelFor="details"
          inputType="text"
          placeholder="Enter the address"
        />
        <Input
          label="Details"
          labelFor="details"
          inputType="text"
          placeholder="Enter the address"
        />
        <Input
          label="Details"
          labelFor="details"
          inputType="text"
          placeholder="Enter the address"
        />
        <Input
          label="Details"
          labelFor="details"
          inputType="text"
          placeholder="Enter the address"
        />
      </div>
      <Button text="Submit" cursor="pointer" />
    </form>
  );
};

export default AddTrackingForm;
