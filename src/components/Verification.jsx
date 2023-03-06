import useFormContext from "../hooks/useFormContext";
import React from "react";
import card from "../id-card.png";
import { useEffect, useRef, useState } from "react";
const Verification = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [photo, setPhoto] = useState("");
  const { data, handleChange } = useFormContext();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dt2g44so1",
        uploadPreset: "fqktsdkz",
      },
      function (error, result) {
        if (result?.event === "success") {
          setPhoto(result.info.secure_url);
          data.si_photoId = result.info.secure_url;
          console.log(result.info.secure_url);
        }
      }
    );
  }, []);

  const content = (
    <div className="flex-col ">
      <p>We just need a document.</p>
      <div className="center">
        {photo ? (
          <img src={photo} width="200px" />
        ) : (
          <img src={card} width="200px" />
        )}
      </div>
      <div name="si_photoId">
        <label htmlFor="photoId">Goverment Photo ID</label>
        <button
          type="button"
          className="upload"
          value={data.si_photoId}
          onClick={() => {
            widgetRef.current.open();
            handleChange;
          }}
        >
          Upload
        </button>
      </div>
      <div className="PersonalInfo">
        <input
          type="checkbox"
          value="sadg"
          name="si_personalInfo"
          onClick={handleChange}
        />
        <label>
          Kişisel verilerimin kullanılmasını,ve korunmasını kabul ediyorum.
        </label>
      </div>
    </div>
  );
  {
    console.log(data);
  }
  return content;
};
export default Verification;
