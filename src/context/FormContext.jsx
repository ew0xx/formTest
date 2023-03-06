import { createContext, useState } from "react";
import React from "react";
const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Let's create your profile!",
    1: "Additional Information",
    2: "Employment & Income",
    3: "Trading Experience",
    4: "Appropriateness Test",
    5: "Verification",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    f_country: "",
    f_firstName: "",
    f_lastName: "",
    f_dateOfBirth: "",
    f_phone: "",
    f_email: "",
    s_buildingNumber: "",
    s_streetNumber: "",
    s_streetName: "",
    s_city: "",
    s_postCode: "",
    s_state: "",
    t_employment: "",
    t_position: "",
    t_industry: "",
    t_income: "",
    t_fundSource: "",
    t_savings: "",
    t_tradingObjective: "",
    t_risk: "",
    fo_tradingTime: "",
    fo_knowledge: "",
    fi_questionOne: "",
    fi_questionTwo: "",
    fi_questionThree: "",
    fi_questionFour: "",
    si_photoId: "",
    si_personalInfo: "",
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { buildingNumber, ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("f_"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("s_") && key !== buildingNumber)
    .map((key) => data[key])
    .every(Boolean);
  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("t_"))
    .map((key) => data[key])
    .every(Boolean);
  const canNextPage4 = Object.keys(data)
    .filter((key) => key.startsWith("fo_"))
    .map((key) => data[key])
    .every(Boolean);
  const canNextPage5 = Object.keys(data)
    .filter((key) => key.startsWith("fi_"))
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2) ||
    (page === 2 && !canNextPage3) ||
    (page === 3 && !canNextPage4) ||
    (page === 4 && !canNextPage5);

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
