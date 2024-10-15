import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../app/components/textarea/textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: 'Textarea',
    id: 'textarea',
    placeholder: 'Placeholder',
    value: 'Textarea value'
  },
};
