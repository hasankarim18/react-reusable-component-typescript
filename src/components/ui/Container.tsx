import { ReactNode } from "react";

type Tchildren = {
  children: ReactNode;
};

const Container = ({ children }: Tchildren) => {
  return (
    <div className=" h-full max-w-7xl mx-auto w-full p-4">
      <h1>{children}</h1>
    </div>
  );
};

export default Container;
