// src/hooks/useCalculator.js
import { useState } from 'react'

export function useCalculator() {
  const [displayValue, setDisplayValue]   = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator]           = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)
  const [error, setError]                 = useState(false)

  const operate = (a, b, op) => {
    switch (op) {
      case '+':  return a + b
      case '-':  return a - b
      case '*':  // interno, no lo usarás directamente
      case '×':  return a * b
      case '/':  // interno, no lo usarás directamente
      case '÷':  return b !== 0 ? a / b : NaN
      case '%':  return a % b
      default:   return b
    }
  }

  const inputDigit = digit => {
    if (error) return
    if (waitingForNewValue) {
      setDisplayValue(digit)
      setWaitingForNewValue(false)
    } else {
      setDisplayValue(prev => {
        const next = prev === '0' ? digit : prev + digit
        return next.length <= 9 ? next : prev
      })
    }
  }

  const inputDecimal = () => {
    if (error) return
    if (waitingForNewValue) {
      setDisplayValue('0.')
      setWaitingForNewValue(false)
    } else {
      setDisplayValue(prev => {
        // si ya tiene punto, no hacemos nada
        if (prev.includes('.')) return prev
        const next = prev + '.'
        return next.length <= 9 ? next : prev
      })
    }
  }

  const handleOperator = nextOp => {
    if (error) return
    const inputValue = parseFloat(displayValue)
    if (previousValue == null) {
      setPreviousValue(inputValue)
    } else if (operator) {
      const result = operate(previousValue, inputValue, operator)
      const str    = String(result)
      if (isNaN(result) || result < 0 || str.length > 9) {
        setError(true)
        setDisplayValue('ERROR')
        return
      }
      setDisplayValue(str)
      setPreviousValue(result)
    }
    setOperator(nextOp)
    setWaitingForNewValue(true)
  }

  const calculate = () => {
    if (error || operator == null || previousValue == null) return
    const inputValue = parseFloat(displayValue)
    const result     = operate(previousValue, inputValue, operator)
    const str        = String(result)
    if (isNaN(result) || result < 0 || str.length > 9) {
      setError(true)
      setDisplayValue('ERROR')
    } else {
      setDisplayValue(str)
      setPreviousValue(null)
      setOperator(null)
      setWaitingForNewValue(true)
    }
  }

  const clearEntry = () => {
    setDisplayValue('0')
    setError(false)
  }

  const clearAll = () => {
    setDisplayValue('0')
    setPreviousValue(null)
    setOperator(null)
    setWaitingForNewValue(false)
    setError(false)
  }

  const toggleSign = () => {
    if (error || displayValue === '0') return
    const next = displayValue.startsWith('-')
      ? displayValue.slice(1)
      : `-${displayValue}`
    if (next.length > 9) {
      setError(true)
      setDisplayValue('ERROR')
    } else {
      setDisplayValue(next)
    }
  }

  return {
    displayValue,
    error,
    inputDigit,
    inputDecimal,
    handleOperator,
    calculate,
    clearEntry,
    clearAll,
    toggleSign,
  }
}