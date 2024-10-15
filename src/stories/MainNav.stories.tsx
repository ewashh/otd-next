import type { Meta, StoryObj } from '@storybook/react';
import MainNav from '../app/components/main-nav/main-nav';

const meta = {
  title: 'Components/MainNav',
  component: MainNav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
