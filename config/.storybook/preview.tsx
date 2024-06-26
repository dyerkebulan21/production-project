import type { Preview } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        Story => (
            <div className="app">
                <Story />
            </div>
        ),
    ],
};

export default preview;
