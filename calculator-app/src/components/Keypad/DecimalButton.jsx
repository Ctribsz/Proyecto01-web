import React from 'react'

export function DecimalButton({ onClick, className = '', ...rest }) {
  return (
    <button
      className={className}
      onClick={onClick}
      {...rest}
    >
      .
    </button>
  )
}