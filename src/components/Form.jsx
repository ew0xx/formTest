import FormInputs from "./FormInputs";
import useFormContext from "../hooks/useFormContext";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
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
  const form = useRef();
  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    for (let value in data) {
      formdata.append(value, data[value]);
    }

    emailjs.send("testing", "template", data, "api").then(
      (result) => {
        setSuccess(true);
      },
      (error) => {
        setSuccess(false);
      }
    );
    fetch(
      "googleDocs",
      {
        method: "POST",
        body: formdata,
      }
    );
  };

  const content = (
    <form ref={form} className="form flex-col" onSubmit={handleSubmit}>
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
        {data.si_photoId && (
          <button type="submit" className={`button ${submitHide}`}>
            Submit
          </button>
        )}
      </div>
      {success && (
        <div className="successMessage">
          Your registration has been successfully completed. We will contact you
          soon.
        </div>
      )}
    </form>
  );
  console.log(data.si_photoId);
  return content;
};
export default Form;
