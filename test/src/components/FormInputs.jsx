import React from "react";
import useFormContext from "../hooks/useFormContext";
import Employment from "./Employment";
import Appropriateness from "./Appropriateness";
import Experience from "./Experience";
import Verification from "./Verification";
import Profile from "./Profile";
import AdditionalInfo from "./AdditionalInfo";

const FormInputs = () => {
  const { page } = useFormContext();

  const display = {
    0: <Profile />,
    1: <AdditionalInfo />,
    2: <Employment />,
    3: <Experience />,
    4: <Appropriateness />,
    5: <Verification />,
  };

  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
