import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'shared/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
