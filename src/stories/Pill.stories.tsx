import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from '../app/components/pill/pill';

const meta = {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    text: 'Pill',
    href: ''
  },
};

export const Active: Story = {
  args: {
    text: 'Pill',
    href: '',
    active: true
  },
};

export const Small: Story = {
  args: {
    text: 'Pill',
    href: '',
    size: 'small'
  },
};
