import React, { useState } from "react";
import OtpVerification from "./OtpVerification";
import "../App.css"; // हम वही CSS फाइल इस्तेमाल करेंगे

const OtpManager = () => {
  // state यह ट्रैक करने के लिए कि कौन सा ऑप्शन चुना गया है (डिफ़ॉल्ट 4)
  const [otpLength, setOtpLength] = useState(4);

  // जब कोई रेडियो बटन पर क्लिक करता है
  const handleLengthChange = (event) => {
    // वैल्यू को नंबर में बदल कर state को अपडेट करें
    setOtpLength(Number(event.target.value));
  };

  return (
    <div className="otp-container">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value={4}
            checked={otpLength === 4}
            onChange={handleLengthChange}
          />
          4-Digit OTP
        </label>
        <label>
          <input
            type="radio"
            value={6}
            checked={otpLength === 6}
            onChange={handleLengthChange}
          />
          6-Digit OTP
        </label>
      </div>

      <OtpVerification key={otpLength} length={otpLength} />
    </div>
  );
};

export default OtpManager;
