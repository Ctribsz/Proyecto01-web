export function DigitButton({ digit, onClick }) {
    return (
      <button onClick={() => onClick(digit)}>
        {digit}
      </button>
    )
  }  