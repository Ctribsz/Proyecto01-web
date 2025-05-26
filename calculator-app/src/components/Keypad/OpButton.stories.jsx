import { OpButton } from './OpButton'

export default {
  title: 'Components/Buttons/OpButton',
  component: OpButton,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'operation' },
  },
}

export const Add = {
  args: { children: '+' },
}

export const Multiply = {
  args: { children: '×' },
}
