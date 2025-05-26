import React from 'react'

export function Display({ value, error, className = '', ...rest }) {
  return (
    <div className={className} {...rest}>
      <span className="display-text">
        {error ? 'ERROR' : value}
      </span>
    </div>
  )
}