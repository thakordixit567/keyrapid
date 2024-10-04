import React, { useEffect } from 'react'
import '../../index.css'
import { useState } from 'react';

const TypingSpace = ({ onType, isDisabled }) => {
  const [input, setInput] = useState('');
  
  useEffect(() => {
    if (isDisabled) {
      setInput('');
    }
  }, [isDisabled]);

  const handleChange = (e) => {
    if (!isDisabled) {
      setInput(e.target.value);
      onType(e.target.value);
    }
  };

  return (
    <textarea
    value={input}
    onChange={handleChange}
    className="typing-space"
    disabled={isDisabled}
    rows="10"
    cols="50"
    placeholder="Start typing here..."
  />
  )
}

export default TypingSpace;