import useFormContext from "../hooks/useFormContext";
import React, { useState } from "react";
const Experience = () => {
  const { data, handleChange } = useFormContext();
  const [open, setOpen] = useState({
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    infoMessage: false,
    infoMessage2: false,
    infoMessage3: false,
  });
  const [selectedOption, setSelectedOption] = useState({
    fo_tradingTime: data.fo_tradingTime,
    fo_quarter: data.fo_quarter,
    fo_experience: data.fo_experience,
    fo_profession: data.fo_profession,
    fo_knowledge: data.fo_knowledge,
  });
  
  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const id = e.target.id;

    setSelectedOption((prev) => ({ ...prev, [name]: id }));

    if (id == "questionOneA") {
      setOpen({ question5: true });
      setSelectedOption({ [name]: id });
    } else if (id == "questionOneB") {
      setOpen({ question2: true });
      setSelectedOption({ [name]: id });
    } else if (id == "questionOneC") {
      setOpen({ question3: true });
      setSelectedOption({ [name]: id });
    } else if (id == "questionTwoA")
      setOpen({ question2: true, question3: false, question5: true });
    else if (id == "questionTwoB")
      setOpen((prev) => ({ ...prev, question5: false, question3: true }));
    else if (id == "questionThreeA")
      setOpen((prev) => ({
        ...prev,
        question4: true,
        infoMessage: true,
        infoMessage3: false,
        infoMessage2: false,
      }));
    else if (id == "questionThreeB")
      setOpen((prev) => ({
        ...prev,
        question4: true,
        infoMessage2: true,
        infoMessage: false,
        infoMessage3: false,
      }));
    else if (id == "questionThreeC")
      setOpen((prev) => ({
        ...prev,
        question4: true,
        question5: true,
        infoMessage3: true,
        infoMessage: false,
        infoMessage2: false,
      }));
    else if (id == "questionThreeD")
      setOpen((prev) => ({
        ...prev,
        question4: false,
        infoMessage3: false,
        infoMessage: false,
        infoMessage2: false,
      }));
  };

  const content = (
    <div className="flex-col">
      <div className="flex-col">
        <label htmlFor="tradingTime">
          How long have you been trading CFDs or FX?
        </label>
        <div
          className="flex-col"
          id="tradingTime"
          name="fo_tradingTime"
          value={data.fo_tradingTime}
          onClick={handleChange}
        >
          <button
            type="button"
            id="questionOneA"
            className={
              selectedOption.fo_tradingTime === "questionOneA"
                ? "questionButton active"
                : "questionButton"
            }
            name="fo_tradingTime"
            value="questionOneA"
            onClick={handleClick}
          >
            More than 2 years
          </button>
          <button
            type="button"
            id="questionOneB"
            className={
              selectedOption.fo_tradingTime === "questionOneB"
                ? "questionButton active"
                : "questionButton"
            }
            name="fo_tradingTime"
            value="Less than 2 years"
            onClick={handleClick}
          >
            Less than 2 years
          </button>
          <button
            type="button"
            id="questionOneC"
            className={
              selectedOption.fo_tradingTime === "questionOneC"
                ? "questionButton active"
                : "questionButton"
            }
            name="fo_tradingTime"
            value="Never"
            onClick={handleClick}
          >
            Never
          </button>
        </div>
      </div>

      {open.question2 && (
        <div
          className="flex-col"
          id="quarter"
          name="fo_quarter"
          value={selectedOption.fo_quarter}
          onClick={handleChange}
        >
          <label htmlFor="quarter">
            How many times have you traded CFDs pr FX in the past 24 months?
          </label>
          <button
            id="questionTwoA"
            type="button"
            name="fo_quarter"
            className={
              selectedOption.fo_quarter === "questionTwoA"
                ? "questionButton active"
                : "questionButton"
            }
            value="More than 30 per quarter"
            onClick={handleClick}
          >
            More than 30 per quarter
          </button>
          <button
            id="questionTwoB"
            name="fo_quarter"
            type="button"
            className={
              selectedOption.fo_quarter === "questionTwoB"
                ? "questionButton active"
                : "questionButton"
            }
            value="Less than 30 per quarter"
            onClick={handleClick}
          >
            Less than 30 per quarter
          </button>
        </div>
      )}
      {open.question3 && (
        <div
          className="flex-col"
          id="experience"
          name="fo_experience"
          value={data.fo_experience}
          onClick={handleChange}
        >
          <label htmlFor="experience">
            Do you have any qualification or experience retaling to CFD, FX,
            Spread Bets or other leveraged products?
          </label>
          <button
            id="questionThreeA"
            name="fo_experience"
            type="button"
            className={
              selectedOption.fo_experience === "questionThreeA"
                ? "questionButton active"
                : "questionButton"
            }
            value="Qualifications"
            onClick={handleClick}
          >
            Qualifications
          </button>
          <button
            id="questionThreeB"
            name="fo_experience"
            type="button"
            className={
              selectedOption.fo_experience === "questionThreeB"
                ? "questionButton active"
                : "questionButton"
            }
            value="Personal experience"
            onClick={handleClick}
          >
            Personal experience
          </button>
          <button
            id="questionThreeC"
            name="fo_experience"
            type="button"
            className={
              selectedOption.fo_experience === "questionThreeC"
                ? "questionButton active"
                : "questionButton"
            }
            value="Qualification and Personal experience"
            onClick={handleClick}
          >
            Qualification and Personal experience
          </button>
          <button
            id="questionThreeD"
            name="fo_experience"
            type="button"
            className={
              selectedOption.fo_experience === "questionThreeD"
                ? "questionButton active"
                : "questionButton"
            }
            value="Neither"
            onClick={handleClick}
          >
            Neither
          </button>
        </div>
      )}
      {open.infoMessage && (
        <p id="infoMessage1" className="info-message">
          ⓘ Based on your answer you acknowledge you hold professional and/or
          educational qualifications relavant to this type of trading.
        </p>
      )}
      {open.infoMessage2 && (
        <p id="infoMessage2" className="info-message">
          ⓘ Based on your answer you work or have worked in financial sector for
          at least one year, which has provided you with knowledge of these
          products.
        </p>
      )}
      {open.infoMessage3 && (
        <p id="infoMessage3" className="info-message">
          ⓘ Based on your answer you acknowledge you hold professional and/or
          educational qualifications relavant to this type of trading and work
          or have worked in the financial sector for at least one year, which
          has provided you with knowledge of these products.
        </p>
      )}
      {open.question4 && (
        <div
          className="flex-col"
          id="profession"
          name="fo_profession"
          value={data.fo_profession}
          onClick={handleChange}
        >
          <label htmlFor="profession">
            Which of the following professional positions have you hold?
          </label>

          <button
            id="questionFourA"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourA"
                ? "questionButton active"
                : "questionButton"
            }
            value="Account Manager"
            onClick={handleClick}
          >
            Account Manager
          </button>
          <button
            id="questionFourB"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourB"
                ? "questionButton active"
                : "questionButton"
            }
            value="Senior Manager"
            onClick={handleClick}
          >
            Senior Manager
          </button>
          <button
            id="questionFourC"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourC"
                ? "questionButton active"
                : "questionButton"
            }
            value="Market Analyst/Resarcher/Strategist"
            onClick={handleClick}
          >
            Market Analyst / Resarcher / Strategist
          </button>
          <button
            id="questionFourD"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourD"
                ? "questionButton active"
                : "questionButton"
            }
            value="Educator"
            onClick={handleClick}
          >
            Educator
          </button>
          <button
            id="questionFourE"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourE"
                ? "questionButton active"
                : "questionButton"
            }
            value="Operations/Back Office"
            onClick={handleClick}
          >
            Operations/Back Office
          </button>
          <button
            id="questionFourF"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourF"
                ? "questionButton active"
                : "questionButton"
            }
            value="Compliance/Legal"
            onClick={handleClick}
          >
            Compliance/Legal
          </button>
          <button
            id="questionFourG"
            name="fo_profession"
            type="button"
            className={
              selectedOption.fo_profession === "questionFourG"
                ? "questionButton active"
                : "questionButton"
            }
            value="Dealing/Market Risk"
            onClick={handleClick}
          >
            Dealing/Market Risk
          </button>
        </div>
      )}
      {open.question5 && (
        <div
          className="flex-col"
          id="knowledge"
          name="fo_knowledge"
          value={data.fo_knowledge}
          onClick={handleChange}
        >
          <label htmlFor="knowledge">
            Based on trading experience, do you confirm that you have a good
            understanding and knowledge of trading derivatives such as CFDs and
            FX and the risks associated with these products?
          </label>

          <button
            type="button"
            id="questionFiveA"
            name="fo_knowledge"
            className={
              selectedOption.fo_knowledge === "questionFiveA"
                ? "questionButton active"
                : "questionButton"
            }
            value="Yes"
            onClick={handleClick}
          >
            Yes
          </button>
          <button
            type="button"
            id="questionFiveB"
            name="fo_knowledge"
            className={
              selectedOption.fo_knowledge === "questionFiveB"
                ? "questionButton active"
                : "questionButton"
            }
            value="questionFiveB"
            onClick={handleClick}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
  
  return content;
};
export default Experience;
