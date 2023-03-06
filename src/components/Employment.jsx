import useFormContext from "../hooks/useFormContext";
import React, { useState } from "react";
const Employment = () => {
  const { data, handleChange } = useFormContext();
  const [answer, setAnswer] = useState(data.t_risk);

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setAnswer(value);
  };

  const content = (
    <div className="flex-col">
      <div className="flex-col">
        <label htmlFor="employment">What is your employment status?</label>
        <select
          id="employment"
          name="t_employment"
          value={data.t_employment}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="student">Student</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-employed</option>
          <option value="retired">Retired</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>
      <div className="flex-col">
        <label htmlFor="position">What position do you hold?</label>
        <p>Your current or most recent occupation</p>
        <select
          id="position"
          name="t_position"
          value={data.t_position}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="student">Owner</option>
          <option value="employed">Employee</option>
          <option value="self-employed">Manager</option>
          <option value="retired">Director</option>
          <option value="unemployed">Contractor / Consultant</option>
          <option value="unemployed">Other</option>
        </select>
      </div>
      <div className="flex-col">
        <label htmlFor="industry">Which industry do you work in?</label>
        <p>The current or most recent industry you worked in</p>
        <select
          id="industry"
          name="t_industry"
          value={data.t_industry}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="Financial Services">Financial Services</option>
          <option value="Legal">Legal</option>
          <option value="Public Sector">Public sector</option>
          <option value="Technology">Technology</option>
          <option value="Media and Arts">Media and Arts</option>
          <option value="Education &amp; Training">
            Education &amp; Training
          </option>
          <option value="Healthcare">Healthcare</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Construction or Trades">Construction or Trades</option>
          <option value="Transport &amp; Logistics">
            Transport &amp; Logistics
          </option>
          <option value="Merchant / Export / Import">
            Merchant / Export / Import
          </option>
          <option value="Arms / Defence">Arms / Defence</option>
          <option value="Jewellery Trader">Jewellery Trader</option>
          <option value="Charity">Charity</option>
          <option value="Art and Antiques">Art and Antiques</option>
          <option value="Mining and Exploration">Mining and Exploration</option>
        </select>
      </div>
      <div className="flex-col">
        <label htmlFor="income">
          What is your annual income (US Dollars) ?
        </label>
        <select
          id="income"
          name="t_income"
          value={data.t_income}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="$10,000 or Less">$10,000 or Less</option>
          <option value="$10,001 - $49,999">$10,001 - $49,999</option>
          <option value="$50,000 - $99,999">$50,000 - $99,999</option>
          <option value="$100,000 - $199,999">$100,000 - $199,999</option>
          <option value="$200,000 - $299,999">$200,000 - $299,999</option>
          <option value="$300,000 - $499,999">$300,000 - $499,999</option>
          <option value="$500,000 or More">$500,000 or More</option>
        </select>
      </div>
      <div className="flex-col">
        <label htmlFor="fundSource">
          What is the primary source of your trading funds?
        </label>
        <select
          id="fundSource"
          name="t_fundSource"
          value={data.t_fundSource}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="Employment">Employment</option>
          <option value="Inheritance">Inheritance</option>
          <option value="Saving & Investments">Saving & Investments</option>
          <option value="Profit / Revenue">ReProfit / Revenuetired</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex-col">
        <label htmlFor="savings">
          What is the value of your savings &amp; investments, excluding any
          property you own (US Dollars)?
        </label>
        <select
          id="savings"
          name="t_savings"
          value={data.t_savings}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="$10,000 or Less">$10,000 or Less</option>
          <option value="$10,001 - $49,999">$10,001 - $49,999</option>
          <option value="$50,000 - $99,999">$50,000 - $99,999</option>
          <option value="$100,000 - $199,999">$100,000 - $199,999</option>
          <option value="$200,000 - $299,999">$200,000 - $299,999</option>
          <option value="$300,000 - $499,999">$300,000 - $499,999</option>
          <option value="$500,000 or More">$500,000 or More</option>
        </select>
      </div>
      <div className="flex-col">
        <label htmlFor="tradingObjective">
          What is your trading objectives?
        </label>
        <select
          id="tradingObjective"
          name="t_tradingObjective"
          value={data.t_tradingObjective}
          onChange={handleChange}
        >
          <option hidden>Please Select</option>
          <option value="Hedging">Hedging</option>
          <option value="Speculation">Speculation</option>
          <option value="Risk Management">Risk Management</option>
          <option value="Diversification">Diversification</option>
        </select>
      </div>
      <div className="flex-col" name="t_risk">
        <label htmlFor="risk">
          Please select the degree of risk you are willing to take with the
          assets in this account
        </label>
        <div className="riskWrapper">
          <div className="riskContainer">
            <div className="left center">
              <button
                id="highRisk"
                name="t_risk"
                className={
                  answer === "High"
                    ? "questionButton active full-width"
                    : "questionButton full-width"
                }
                value="High"
                onClick={(e) => {
                  handleClick(e);
                  handleChange(e);
                }}
              >
                High
              </button>
            </div>
            <div className="right">
              <span>
                I accept a high degree of volatility and possibly losses of my
                initial investment amount.
              </span>
            </div>
          </div>
          <div className="riskContainer">
            <div className="left center">
              <button
                id="ModerateRisk"
                name="t_risk"
                className={
                  answer === "Moderate"
                    ? "questionButton active full-width"
                    : "questionButton full-width"
                }
                value="Moderate"
                onClick={(e) => {
                  handleClick(e);
                  handleChange(e);
                }}
              >
                Moderate
              </button>{" "}
            </div>
            <div className="right">
              <span>
                I accept a fair amount of fluctuation in my initial investment
                amount in order to achieve above average returns and capital
                growth.
              </span>
            </div>
          </div>
          <div className="riskContainer">
            <div className="left center">
              <button
                id="LowRisk"
                name="t_risk"
                className={
                  answer === "Low"
                    ? "questionButton active full-width"
                    : "questionButton full-width"
                }
                value="Low"
                onClick={(e) => {
                  handleClick(e);
                  handleChange(e);
                }}
              >
                Low
              </button>
            </div>
            <div className="right">
              <span>
                I accept steady and minimal returns without any fluctuations in
                my initial investment amount.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  console.log(data);
  return content;
};
export default Employment;
