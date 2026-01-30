import { create } from '@storybook/theming';

export default create({
    base: 'light',

    // Brand
    brandTitle: 'Cashy Design System',
    brandUrl: '/',
    brandImage: './logo-dark.svg',
    brandTarget: '_self',

    // Colors
    colorPrimary: '#17142B', // --brand-500
    colorSecondary: '#17142B', // --brand-500

    // UI
    appBg: '#FBFCFC', // --gray-50
    appContentBg: '#FFFFFF', // --white
    appBorderColor: '#D7DBE0', // --gray-200
    appBorderRadius: 8, // --radius-200
    appPreviewBg: '#FFFFFF',

    // Text
    fontBase: '"Inter", sans-serif',
    fontCode: '"Roboto Mono", monospace',
    textColor: '#131518', // --gray-950
    textInverseColor: '#FFFFFF',

    // Toolbar default
    barTextColor: '#6C798B', // --gray-500
    barSelectedColor: '#17142B', // --brand-500
    barBg: '#FFFFFF', // --white
    barHoverColor: '#17142B', // --brand-500

    // Form colors
    inputBg: '#FFFFFF',
    inputBorder: '#D7DBE0',
    inputTextColor: '#131518',
    inputBorderRadius: 4,
});
