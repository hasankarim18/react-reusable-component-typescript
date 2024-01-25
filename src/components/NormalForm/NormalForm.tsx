import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import ErrorMessage from "../ui/ErrorMessage";
import { SignUpSchema, TNormalForm } from "./validation";

export default function NormalForm() {
  const {
    register,
    handleSubmit,
    //  watch,
    formState: { errors }, // errors
  } = useForm<TNormalForm>({
    defaultValues: {
      name: "Jhon Doe",
      email: "jhon@mail.com",
      password: "",
    },
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit: SubmitHandler<TNormalForm> = (data) => console.log(data);

  const double = false;

  return (
    <div
      className={cn("mt-8 text-2xl max-w-lg mx-auto ", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <form
        className="border-2 p-4 rounded-md  "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div
          className={cn(`grid grid-cols-1  gap-4 justify-items-center`, {
            "grid-cols-2": double,
          })}
        >
          <div className="w-full">
            <label className="block" htmlFor="firstName">
              Name
            </label>
            <input
              id="name"
              className="w-full"
              defaultValue=""
              {...register("name")}
            />
            {errors.name && (
              <ErrorMessage variant="warning" role="alert">
                {errors.name.message}
              </ErrorMessage>
            )}
          </div>

          <div className="w-full">
            {/* include validation with required or other standard HTML validation rules */}
            <label className="block" htmlFor="email">
              Email
            </label>
            <input id="email" className="w-full" {...register("email")} />
            {errors.email && (
              <ErrorMessage variant="warning" className="" role="alert">
                {errors.email.message}
              </ErrorMessage>
            )}
          </div>

          <div className="w-full">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className=""
              {...register("password", { minLength: 8 })}
            />
            {errors.password && (
              <ErrorMessage variant="warning">
                {errors.password.message}
              </ErrorMessage>
            )}
          </div>

          <div>
            <Button variant="solid" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
