export function Display({ value, error }) {
    return (
      <div className="display">
        {error ? 'ERROR' : value}
      </div>
    )
  }  