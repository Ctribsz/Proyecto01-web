import React from 'react'

export function OpButton({ children, onClick, className = '', ...rest }) {
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