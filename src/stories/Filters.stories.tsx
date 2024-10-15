import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from '../app/components/filters/filters';

const meta = {
  title: 'Components/Filters',
  component: Filters,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const CurrentCategory: Story = {
  args: {
    currentCategory: 'design'
  },
};
