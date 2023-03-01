import useFormContext from "../hooks/useFormContext";
import React, { useState } from "react";
const Appropriateness = () => {
  const { data, handleChange } = useFormContext();
  const [answer, setAnswer] = useState({
    fi_questionOne: data.fi_questionOne,
    fi_questionTwo: data.fi_questionTwo,
    fi_questionThree: data.fi_questionThree,
    fi_questionFour: data.fi_questionFour,
  });

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAnswer((prev) => ({ ...prev, [name]: value }));
  };

  const content = (
    <div className="flex-col">
      <div
        className="flex-col"
        id="questionOne"
        name="fi_questionOne"
        onClick={handleChange}
      >
        <label htmlFor="questionOne">What is market vlotility?</label>
        <button
          type="button"
          id="questionOneA"
          className={
            answer.fi_questionOne === "optionA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionOne"
          onClick={handleClick}
          value="optionA"
        >
          When there is little or no movement in price over a period of time
        </button>
        <button
          id="questionOneB"
          className={
            answer.fi_questionOne === "optionB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionOne"
          onClick={handleClick}
          value="optionB"
        >
          When there are large movements in price over a short period of time
        </button>
        <button
          id="questionOneC"
          className={
            answer.fi_questionOne === "optionC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionOne"
          value="optionC"
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
            answer.fi_questionTwo === "optionA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionTwo"
          value="optionA"
          onClick={handleClick}
        >
          Equity is your account balance plus the floating profit (or loss) of
          all your open positions.
        </button>
        <button
          id="questionTwoB"
          className={
            answer.fi_questionTwo === "optionB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionTwo"
          onClick={handleClick}
          value="optionB"
        >
          Equity is the TOTAL amount of margin currently in use to maintain all
          open positions.
        </button>
        <button
          id="questionTwoC"
          className={
            answer.fi_questionTwo === "optionC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionTwo"
          onClick={handleClick}
          value="optionC"
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
            answer.fi_questionThree === "optionA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionThree"
          onClick={handleClick}
          value="optionA"
        >
          The profit from a trade
        </button>
        <button
          id="questionThreeB"
          className={
            answer.fi_questionThree === "optionB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionThree"
          onClick={handleClick}
          value="optionB"
        >
          The loss from a trade
        </button>
        <button
          id="questionThreeC"
          className={
            answer.fi_questionThree === "optionC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionThree"
          onClick={handleClick}
          value="optionC"
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
            answer.fi_questionFour === "optionA"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionFour"
          onClick={handleClick}
          value="optionA"
        >
          Vlc Capital&#39;s risk team
        </button>
        <button
          id="questionFourB"
          className={
            answer.fi_questionFour === "optionB"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionFour"
          onClick={handleClick}
          value="optionB"
        >
          It is my responsilibity to monitor and manage my trading account
        </button>
        <button
          id="questionFourC"
          className={
            answer.fi_questionFour === "optionC"
              ? "questionButton active"
              : "questionButton"
          }
          name="fi_questionFour"
          onClick={handleClick}
          value="optionC"
        >
          My trading account does not require management or monitoring
        </button>
      </div>
    </div>
  );

  return content;
};
export default Appropriateness;
