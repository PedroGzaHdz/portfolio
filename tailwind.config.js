/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#6D28D9', // Color morado principal
                    50: '#F5F3FF',
                    100: '#EDE9FE',
                    700: '#6D28D9',
                    800: '#5B21B6'
                }
            },
            fontFamily: {
                'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
