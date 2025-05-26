import React from 'react'

export function EqualButton({ onClick, className = '', ...rest }) {
  return (
    <button
      className={className}
      onClick={onClick}
      {...rest}
    >
      =
    </button>
  )
}