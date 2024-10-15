import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../app/components/input/input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Url: Story = {
  args: {
    label: 'Link',
    type: 'url',
    id: 'submit-tool__link',
    placeholder: 'Placeholder',
    value: 'Input value'
  },
};
