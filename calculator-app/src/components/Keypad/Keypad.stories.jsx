import { Keypad } from './Keypad'

export default {
  title: 'Components/Keypad',
  component: Keypad,
  argTypes: {
    onDigit:   { action: 'digit' },
    onOp:      { action: 'operation' },
    onDecimal: { action: 'decimal' },
    onEqual:   { action: 'equal' },
    onToggle:  { action: 'toggleSign' },
  },
}

export const Default = {
  args: {}
}