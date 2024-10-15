import type { Meta, StoryObj } from '@storybook/react';
import { SubmitTool } from '../app/components/submit-tool/submit-tool';

const meta = {
  title: 'Components/SubmitTool',
  component: SubmitTool,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubmitTool>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
