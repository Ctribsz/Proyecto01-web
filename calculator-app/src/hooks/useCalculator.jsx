import { useState } from 'react'

export function useCalculator() {
  const [displayValue, setDisplayValue] = useState('0')
  const [operator, setOperator]       = useState(null)
  const [previousValue, setPreviousValue] = useState(null)
  const [error, setError]             = useState(false)

  const inputDigit = digit => {
    // 1. Ignora si error === true
    // 2. Concatenar o reemplazar displayValue
    // 3. Asegurar ≤ 9 caracteres
  }

  const inputDecimal = () => {
    // 1. Ignora si ya hay '.'
    // 2. Concatenar '.'
    // 3. Validar longitud
  }

  const handleOperator = nextOp => {
    // 1. Si no hay previousValue → almacenar displayValue como número
    // 2. Si hay previousValue → calcular prevOp sobre previousValue y displayValue
    // 3. Actualizar operator a nextOp
    // 4. Marcar que el siguiente dígito limpia el display
  }

  const toggleSign = () => {
    // 1. Si displayValue empieza con '-' → quitarlo
    // 2. Si no → añadir '-' al inicio
    // 3. Validar longitud y rango
  }

  const calculate = () => {
    // 1. Mismo proceso que en handleOperator pero sin asignar new op
    // 2. Mostrar resultado en displayValue
  }

  return {
    displayValue,
    error,
    inputDigit,
    inputDecimal,
    handleOperator,
    toggleSign,
    calculate,
  }
}