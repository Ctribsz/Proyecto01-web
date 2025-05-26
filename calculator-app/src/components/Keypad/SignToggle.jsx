import React from 'react'

export function SignToggle({ onClick, className = '', ...rest }) {
  return (
    <button
      className={className}
      onClick={onClick}
      {...rest}
    >
      +/-
    </button>
  )
}