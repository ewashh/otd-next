import type { Meta, StoryObj } from '@storybook/react';
import { ToolCard } from '../app/components/tool-card/tool-card';

const meta = {
  title: 'Components/ToolCard',
  component: ToolCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToolCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: 'Flaticon',
    description: 'The largest database of free icons available in PNG, SVG, EPS, PSD and BASE 64 formats',
    categories: [{id: 'design', name: 'Design'}, {id: 'media-resources', name: 'Media resources'}],
    href: ''
  },
};
