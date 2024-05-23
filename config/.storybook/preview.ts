import type { Preview } from '@storybook/react';
import {addDecorator} from '@storybook/react'
import { StyleDecorator } from 'src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

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


addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))

export default preview;