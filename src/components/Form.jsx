import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import React from "react";
const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    for (let value in data) {
      formdata.append(value, data[value]);
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbxVbGPrB-9r-CebOtcF2MvHeWjqn0XLyGxlJg2c4Ci-r5bijiTWRzbmb1Cxw3Z9O1dBZA/exec",
      {
        method: "POST",
        body: formdata,
      }
    );
  };

  
  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <header className="form-header">
        <h2>{title[page]}</h2>
      </header>

      <FormInputs />
      <div className="button-container">
        <button
          type="button"
          className={`button prev ${prevHide}`}
          onClick={handlePrev}
          disabled={disablePrev}
        >
          Back
        </button>

        <button
          type="button"
          className={`button ${nextHide}`}
          onClick={handleNext}
          disabled={disableNext}
        >
          Next
        </button>

        <button
          type="submit"
          className={`button ${submitHide}`}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );

  return content;
};
export default Form;
