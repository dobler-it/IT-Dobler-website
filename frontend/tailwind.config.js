const {createGlobPatternsForDependencies} = require('@nx/angular/tailwind');
const {join} = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                'gold': '#DCA54C',
                'dark-blue': '#001F29',
            },
            backgroundImage: {
                'dark-card-border-gold': 'url("/assets/images/dark-mode/card-border-gold.svg")',
                'dark-card-border-light-gold': 'url("/assets/images/dark-mode/card-border-light-gold.svg")',
                'light-card-border-light-gold': 'url("/assets/images/light-mode/card-border-light-gold.svg")',
                'light-card-border-gold': 'url("/assets/images/light-mode/card-border-gold.svg")',
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
            },
            listStyleImage: {
                'list-point-gold': 'url("/assets/images/list-point-gold.svg")',
                'list-point-light-gold': 'url("/assets/images/dark-mode/list-point-light-gold.svg")',
                'list-point-white': 'url("/assets/images/light-mode/list-point-white.svg")',
            },
        },
    },
    plugins: [],
};
