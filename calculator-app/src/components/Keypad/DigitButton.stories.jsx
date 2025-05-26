// src/components/Keypad/DigitButton.stories.jsx
import React from 'react'
import { DigitButton } from './DigitButton'

export default {
  title: 'Components/Buttons/DigitButton',
  component: DigitButton,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export const Seven = {
  args: {
    children: '7',
  },
}

export const Zero = {
  args: {
    children: '0',
    className: 'zero',
  },
}