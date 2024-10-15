import type { Meta, StoryObj } from '@storybook/react';
import Header from '../app/components/header/header';
import { Filters } from '../app/components/filters/filters';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent: Story = {
  args: {
    title: 'Header',
    paragraph: 'Get your work done better and faster than ever with the best tools on the internet.'
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Header',
    paragraph: 'Get your work done better and faster than ever with the best tools on the internet.',
    children: (
      <Filters/>
    ),
  },
};
