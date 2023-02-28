import useFormContext from "../hooks/useFormContext";
import React from "react";
import card from "../id-card.png";
const Verification = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex-col ">
      <p>We just need a document.</p>
      <div className="center">
        <img src={card} width="200px" />
      </div>
      <label htmlFor="billCity">Goverment Photo ID</label>
      <input
        type="file"
        id="photoId"
        name="si_photoId"
        
        onChange={handleChange}
      />
    </div>
  );
 
  return content;
};
export default Verification;
