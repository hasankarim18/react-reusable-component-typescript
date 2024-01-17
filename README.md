## React Reusable component with Tailwind CSS

#### Plugin used

- twMerge
- clsx
- cn utility function is used to write twMerge and clsx. clsx is used inside twMerge

```
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

// cn function for react-tailwind+typescript-- for js type ClassValue[] will be omited

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cn;

```

### React reusable component

- Combining react reusable component with the `twMerge` and `clsx` from **cn** function

```
import cn from "../../utils/cn";


const Button = ({ className, outline }) => {
  return (
    <button
      className={cn(
        "btn",
        {
          "border-2 border-red-400": outline,
        },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;

```
