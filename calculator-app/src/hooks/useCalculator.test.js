// src/hooks/useCalculator.test.js
import { renderHook, act } from '@testing-library/react-hooks'
import { useCalculator }   from './useCalculator'

describe('useCalculator', () => {
  it('suma 2 + 3 = 5', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('2') })
    act(() => { result.current.handleOperator('+') })
    act(() => { result.current.inputDigit('3') })
    act(() => { result.current.calculate() })
    expect(result.current.displayValue).toBe('5')
  })

  it('resta 5 - 2 = 3', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('5') })
    act(() => { result.current.handleOperator('-') })
    act(() => { result.current.inputDigit('2') })
    act(() => { result.current.calculate() })
    expect(result.current.displayValue).toBe('3')
  })

  it('multiplica 4 × 6 = 24', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('4') })
    act(() => { result.current.handleOperator('×') })
    act(() => { result.current.inputDigit('6') })
    act(() => { result.current.calculate() })
    expect(result.current.displayValue).toBe('24')
  })

  it('divide 9 ÷ 3 = 3', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('9') })
    act(() => { result.current.handleOperator('÷') })
    act(() => { result.current.inputDigit('3') })
    act(() => { result.current.calculate() })
    expect(result.current.displayValue).toBe('3')
  })

  it('ignora más de 9 dígitos en el display', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      '1234567890'.split('').forEach(d => result.current.inputDigit(d))
    })
    expect(result.current.displayValue.length).toBe(9)
  })

  it('muestra ERROR en negativo', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('2') })
    act(() => { result.current.handleOperator('-') })
    act(() => { result.current.inputDigit('5') })
    act(() => { result.current.calculate() })
    expect(result.current.displayValue).toBe('ERROR')
  })

  it('muestra ERROR en overflow > 999999999', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      '999999999'.split('').forEach(d => result.current.inputDigit(d))
    })
    expect(result.current.displayValue).toBe('999999999')
  
    act(() => {
      result.current.handleOperator('×')
      result.current.inputDigit('2')
    })
    act(() => {
      result.current.calculate()
    })
  
    expect(result.current.displayValue).toBe('ERROR')
  })  

})