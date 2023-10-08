/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                barlow: ['Barlow', 'sans-serif'],
            },
            display: [
                'children',
                'default',
                'children-first',
                'children-last',
                'children-odd',
                'children-even',
                'children-not-first',
                'children-not-last',
                'children-hover',
                'hover',
                'children-focus',
                'focus',
                'children-focus-within',
                'focus-within',
                'children-active',
                'active',
                'children-visited',
                'visited',
                'children-disabled',
                'disabled',
                'responsive',
            ],
        },
    },
    plugins: [require('tailwindcss-children')],
};
