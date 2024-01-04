"use client";
import { useState } from "react";

const Input = ({ className }: any) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        className={`${className} outline-none border-none`}
        placeholder="Search here.."
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
