import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';

export default defineWorkspace([
    {
        extends: '../vitest.config.ts',
        plugins: [
            storybookTest({
                storybookScript: 'npm run storybook -- --ci',
            }),
            storybookNextJsPlugin(),
        ],
        test: {
            name: 'storybook',
            browser: {
                enabled: true,
                headless: true,
                name: 'chromium',
                provider: 'playwright',
            },
            setupFiles: ['./.storybook/vitest.setup.ts'],
        },
    },
]);
