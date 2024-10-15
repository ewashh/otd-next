import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../app/components/button/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    text: 'Button',
    size: 'regular'
  },
};

export const Small: Story = {
  args: {
    text: 'Button',
    size: 'small'
  },
};

export const Big: Story = {
  args: {
    text: 'Button',
    size: 'big'
  },
};
