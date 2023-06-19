import React from "react";
import Logo from "@/components/Logo";
import { logos } from "@/constants";

const Logos = () => {
  return (
    <div className="section-logos bg-secondary-sacramento-state-green py-24 lg:py-36">
      <div className="container-fluid">
        <h2 className="text-center mb-16 md:mb-12 lg:mb-16 ">
          Some of our clients
        </h2>
        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-5 md:gap-x-10 lg:gap-20">
          {logos.map((item) => (
            <Logo
              key={item.id}
              data={item}
              classes="w-36 md:w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
