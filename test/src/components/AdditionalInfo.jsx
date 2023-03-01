import useFormContext from "../hooks/useFormContext";
import React from "react";

const AdditionalInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <>
      <div className="flex-col">
        <label htmlFor="buildingNumber">Building number (optional)</label>
        <input
          type="text"
          id="buildingNumber"
          name="s_buildingNumber"
          pattern="([A-Za-z0-9])[\w+.]{1,}"
          value={data.s_buildingNumber}
          onChange={handleChange}
        />
      </div>
      <div className="flex-col">
        <label htmlFor="streetNumber">Street number</label>
        <input
          type="text"
          id="streetNumber"
          name="s_streetNumber"
          pattern="([A-Za-z0-9])[\w+.]{1,}"
          value={data.s_streetNumber}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="streetName">Street name</label>
      <input
        type="text"
        id="streetName"
        name="s_streetName"
        pattern="([A-Za-z0-9])[\w+.]{1,}"
        value={data.s_streetName}
        onChange={handleChange}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="s_city"
        pattern="([A-Za-z0-9])[\w+.]{1,}"
        value={data.s_city}
        onChange={handleChange}
      />
      <label htmlFor="postCode">Postcode</label>
      <input
        type="text"
        id="postCode"
        name="s_postCode"
        value={data.s_postCode}
        onChange={handleChange}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="s_state"
        value={data.s_state}
        onChange={handleChange}
      />
    </>
  );
  {
    console.log(data);
  }
  return content;
};
export default AdditionalInfo;
