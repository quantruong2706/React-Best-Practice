import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event: { target: { value: string } }) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setIsValid(emailRegex.test(emailValue));
  };

  return (
    <div>
      <label htmlFor="email-input">Email:</label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
    </div>
  );
};

export default EmailInput;
