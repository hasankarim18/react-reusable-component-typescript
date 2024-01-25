import { useFormContext } from "react-hook-form";

const InputFields = () => {
  const { register } = useFormContext();
  return (
    <div className="w-full">
      <label htmlFor="phone">Phone Number</label>
      <input {...register("phone")} className="w-full" type="text" />
    </div>
  );
};

export default InputFields;
