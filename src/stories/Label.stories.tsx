import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../app/components/label/label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'Label',
    id: 'label'
  },
};
