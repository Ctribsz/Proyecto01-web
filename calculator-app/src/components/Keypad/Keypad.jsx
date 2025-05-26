import React from 'react'
import { DigitButton } from './DigitButton'
import { OpButton } from './OpButton'
import { DecimalButton } from './DecimalButton'
import { EqualButton } from './EqualButton'
import { SignToggle } from './SignToggle'

export function Keypad({ onDigit, onOp, onDecimal, onEqual, onToggle }) {
  return (
    <div className="keypad">
      <div className="row">
        <SignToggle onClick={onToggle} />
        <OpButton op="%" onClick={onOp} />
        <OpButton op="/" onClick={onOp} />
        <OpButton op="*" onClick={onOp} />
      </div>
      <div className="row">
        <DigitButton digit="7" onClick={onDigit} />
        <DigitButton digit="8" onClick={onDigit} />
        <DigitButton digit="9" onClick={onDigit} />
        <OpButton op="-" onClick={onOp} />
      </div>
      <div className="row">
        <DigitButton digit="4" onClick={onDigit} />
        <DigitButton digit="5" onClick={onDigit} />
        <DigitButton digit="6" onClick={onDigit} />
        <OpButton op="+" onClick={onOp} />
      </div>
      <div className="row">
        <DigitButton digit="1" onClick={onDigit} />
        <DigitButton digit="2" onClick={onDigit} />
        <DigitButton digit="3" onClick={onDigit} />
        <EqualButton onClick={onEqual} />
      </div>
      <div className="row">
        <DigitButton digit="0" onClick={onDigit} />
        <DecimalButton onClick={onDecimal} />
      </div>
    </div>
  )
}