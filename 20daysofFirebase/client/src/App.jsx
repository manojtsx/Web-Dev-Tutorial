// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState(null);

  const sendOtp = async () => {
    try {
      const response = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setOtpSent(true);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to send OTP');
    }
  };

  return (
    <div>
      <h1>Send OTP</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={sendOtp}>Send OTP</button>
      {otpSent && <p>OTP sent to your email!</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default App;
