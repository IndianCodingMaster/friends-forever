import React, { useState, useRef } from "react";
import "../App.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 4);

    if (/^[0-9]{4}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputsRef.current[3].focus();
    }
  };
  return (
    <div className="otp-card">
      <h2>OTP Verification</h2>
      <p>Please enter the 4-digit OTP code sent to your phone number</p>

      <div className="otp-inputs" onPaste={handlePaste}>
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="otp-input"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
            ref={(el) => (inputsRef.current[index] = el)}
          />
        ))}
      </div>

      <button className="verify-button">Verify</button>
    </div>
  );
};

export default OtpVerification;
