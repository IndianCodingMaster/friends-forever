import React, { useState, useRef, useEffect } from "react";
import "../App.css"; // हम वही CSS फाइल इस्तेमाल करेंगे

const OtpVerification = ({ length = 4 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    setOtp(new Array(length).fill(""));
    inputsRef.current = inputsRef.current.slice(0, length);
  }, [length]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < length - 1) {
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
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    const otpRegex = new RegExp(`^[0-9]{${length}}$`);
    if (otpRegex.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputsRef.current[length - 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length === length) {
      alert("Verifying OTP: " + finalOtp);
    } else {
      alert(`Please enter a valid ${length}-digit OTP.`);
    }
  };

  return (
    <div className="otp-card">
      <h2>OTP Verification</h2>
      <p>Please enter the {length}-digit OTP code sent to your phone number</p>
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
      <button className="verify-button" onClick={handleSubmit}>
        Verify
      </button>
    </div>
  );
};

export default OtpVerification;
