import type { Meta, StoryObj } from '@storybook/react';
import MainFooter from '../app/components/footer/footer';

const meta = {
  title: 'Components/Footer',
  component: MainFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
