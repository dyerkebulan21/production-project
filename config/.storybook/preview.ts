import type { Preview } from '@storybook/react';
import {addDecorator} from '@storybook/react'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};


addDecorator()

export default preview;
