import useFormContext from "../hooks/useFormContext";
import React, { useState } from "react";
const Appropriateness = () => {
  const { data, handleChange } = useFormContext();
  const [answer, setAnswer] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const id = e.target.id;
    setAnswer((prev) => ({ ...prev, [name]: id }));
  };

  const content = (
    <div className="flex-col">
      <div
        className="flex-col"
        id="questionOne"
        name="questionOne"
        onClick={handleChange}
      >
        <label htmlFor="questionOne">What is market vlotility?</label>
        <button
          type="button"
          id="questionOneA"
          className={
            answer.fi_questionOne === "questionOneA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionOne"
          onClick={handleClick}
          value="When there is little or no movement in price over a period of time"
        >
          When there is little or no movement in price over a period of time
        </button>
        <button
          id="questionOneB"
          className={
            answer.fi_questionOne === "questionOneB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionOne"
          onClick={handleClick}
          value="When there are large movements in price over a short period of time"
        >
          When there are large movements in price over a short period of time
        </button>
        <button
          id="questionOneC"
          className={
            answer.fi_questionOne === "questionOneC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionOne"
          value="Volatility is a measure of how much profit you will make on a trade"
          onClick={handleClick}
        >
          Volatility is a measure of how much profit you will make on a trade
        </button>
      </div>
      <div
        className="flex-col"
        id="questionTwo"
        name="fi_questionTwo"
        onClick={handleChange}
      >
        <label htmlFor="billLastName">
          What does the term &apos;equity&apos; refer to?
        </label>
        <button
          id="questionTwoA"
          className={
            answer.fi_questionTwo === "questionTwoA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionTwo"
          value="Equity is your account balance plus the floating profit (or loss) of all your open positions."
          onClick={handleClick}
        >
          Equity is your account balance plus the floating profit (or loss) of
          all your open positions.
        </button>
        <button
          id="questionTwoB"
          className={
            answer.fi_questionTwo === "questionTwoB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionTwo"
          onClick={handleClick}
          value="Equity is the TOTAL amount of margin currently in use to maintain all open positions."
        >
          Equity is the TOTAL amount of margin currently in use to maintain all
          open positions.
        </button>
        <button
          id="questionTwoC"
          className={
            answer.fi_questionTwo === "questionTwoC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionTwo"
          onClick={handleClick}
          value="Equity is the gap between the bid and the ask price"
        >
          Equity is the gap between the bid and the ask price
        </button>
      </div>
      <div
        className="flex-col"
        id="questionThree"
        name="fi_questionThree"
        onClick={handleChange}
      >
        <label htmlFor="billLastName">Which is &apos;the spread&apos;?</label>
        <button
          id="questionThreeA"
          className={
            answer.fi_questionThree === "questionThreeA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionThree"
          onClick={handleClick}
          value="The profit from a trade"
        >
          The profit from a trade
        </button>
        <button
          id="questionThreeB"
          className={
            answer.fi_questionThree === "questionThreeB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionThree"
          onClick={handleClick}
          value="The loss from a trade"
        >
          The loss from a trade
        </button>
        <button
          id="questionThreeC"
          className={
            answer.fi_questionThree === "questionThreeC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionThree"
          onClick={handleClick}
          value="The difference between the bid and the ask price"
        >
          The difference between the bid and the ask price
        </button>
      </div>
      <div
        className="flex-col"
        id="questionFour"
        name="fi_questionFour"
        onClick={handleChange}
      >
        <label htmlFor="billLastName">
          What is ultimately responsible for monitoring and managing your
          trading account?
        </label>
        <button
          id="questionFourA"
          className={
            answer.fi_questionFour === "questionFourA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionFour"
          onClick={handleClick}
          value="Vlc Capital's risk team"
        >
          Vlc Capital&#39;s risk team
        </button>
        <button
          id="questionFourB"
          className={
            answer.fi_questionFour === "questionFourB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionFour"
          onClick={handleClick}
          value="It is my responsilibity to monitor and manage my trading account"
        >
          It is my responsilibity to monitor and manage my trading account
        </button>
        <button
          id="questionFourC"
          className={
            answer.fi_questionFour === "questionFourC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionFour"
          onClick={handleClick}
          value="My trading account does not require management or monitoring"
        >
          My trading account does not require management or monitoring
        </button>
      </div>
    </div>
  );

  return content;
};
export default Appropriateness;
