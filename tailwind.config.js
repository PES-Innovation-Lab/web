// tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'ph': {'max': '1024px'},
            'lg': {'min': '1025px'}
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}