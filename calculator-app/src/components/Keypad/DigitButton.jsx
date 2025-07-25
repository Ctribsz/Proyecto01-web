// src/components/Keypad/DigitButton.jsx
import React from 'react'

export function DigitButton({ children, onClick, className = '', ...rest }) {
  return (
    <button
      className={className}
      onClick={() => onClick(String(children))}
      {...rest}
    >
      {children}
    </button>
  )
}