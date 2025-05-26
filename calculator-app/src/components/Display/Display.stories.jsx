import { Display } from './Display'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    value: { control: 'text' },
    error: { control: 'boolean' },
  },
}

export const Normal = {
  args: {
    value: '12345',
    error: false,
  },
}

export const ErrorState = {
  args: {
    value: '',
    error: true,
  },
}
