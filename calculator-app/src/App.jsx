import { useCalculator } from './hooks/useCalculator'
import { Display }     from './components/Display/Display'
import { DigitButton }  from './components/Keypad/DigitButton'
// importa OpButton, DecimalButton, EqualButton, SignToggle...

function App() {
  const {
    displayValue,
    error,
    inputDigit,
    inputDecimal,
    handleOperator,
    toggleSign,
    calculate,
  } = useCalculator()

  return (
    <div className="calculator">
      <Display value={displayValue} error={error} />
      <div className="keypad">
        <DigitButton digit="1" onClick={inputDigit} />
        {/* … todos los dígitos … */}
        <OpButton op="+" onClick={handleOperator} />
        {/* … resto de operaciones … */}
        <DecimalButton onClick={inputDecimal} />
        <SignToggle onClick={toggleSign} />
        <EqualButton onClick={calculate} />
      </div>
    </div>
  )
}

export default App