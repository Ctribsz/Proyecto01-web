// src/App.jsx
import React, { useState, useCallback } from 'react'
import { useCalculator }    from './hooks/useCalculator'
import { Display }          from './components/Display/Display'
import { DigitButton }      from './components/Keypad/DigitButton'
import { OpButton }         from './components/Keypad/OpButton'
import { DecimalButton }    from './components/Keypad/DecimalButton'
import { EqualButton }      from './components/Keypad/EqualButton'
import { SignToggle }       from './components/Keypad/SignToggle'
import './styles/App.css'

export default function App() {
  const {
    displayValue, error,
    inputDigit, inputDecimal,
    handleOperator, calculate,
    clearEntry, clearAll, toggleSign,
  } = useCalculator()

  const [isVaporwave, setIsVaporwave] = useState(false)
  const [isShaking,   setIsShaking]   = useState(false)

  const triggerShake = useCallback(() => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 200)
  }, [])

  const wrap = fn => (...args) => { triggerShake(); fn(...args) }

  const onDigit   = wrap(inputDigit)
  const onOp      = wrap(handleOperator)
  const onDec     = wrap(inputDecimal)
  const onEq      = wrap(calculate)
  const onCE      = wrap(clearEntry)
  const onAC      = wrap(clearAll)
  const onSign    = wrap(toggleSign)

  const toggleTheme = () => {
    triggerShake()
    setIsVaporwave(v => !v)
  }

  return (
    <div className={`app ${isVaporwave ? 'vaporwave' : ''}`}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {isVaporwave ? '🌙' : '🌆'}
      </button>

      <div
        id="calculator"
        className={`${isVaporwave ? 'vaporwave' : ''} ${isShaking ? 'shake' : ''}`}
      >
        <div className="pixel-border border-top" />
        <div className="pixel-border border-bottom" />
        <div className="pixel-border border-left" />
        <div className="pixel-border border-right" />

        <div className="display-container">
          <Display
            value={displayValue}
            error={error}
            className="display"
          />
        </div>

        <div className="buttons">
          <DigitButton className="btn clear"    onClick={onAC}>AC</DigitButton>
          <DigitButton className="btn clear"    onClick={onCE}>CE</DigitButton>
          <OpButton    className="btn operation" onClick={onOp} op="%" >%</OpButton>
          <OpButton    className="btn operation" onClick={onOp} op="÷" >÷</OpButton>

          {['7','8','9'].map(n => (
            <DigitButton key={n} className="btn" onClick={onDigit} digit={n}>{n}</DigitButton>
          ))}
          <OpButton className="btn operation" onClick={onOp} op="×">×</OpButton>

          {['4','5','6'].map(n => (
            <DigitButton key={n} className="btn" onClick={onDigit} digit={n}>{n}</DigitButton>
          ))}
          <OpButton className="btn operation" onClick={onOp} op="-">-</OpButton>

          {['1','2','3'].map(n => (
            <DigitButton key={n} className="btn" onClick={onDigit} digit={n}>{n}</DigitButton>
          ))}
          <OpButton className="btn operation" onClick={onOp} op="+">+</OpButton>

          <DigitButton className="btn zero" onClick={onDigit} digit="0">0</DigitButton>
          <DecimalButton className="btn" onClick={onDec}>.</DecimalButton>
          <EqualButton   className="btn operation" onClick={onEq}>=</EqualButton>
        </div>
      </div>
    </div>
  )
}