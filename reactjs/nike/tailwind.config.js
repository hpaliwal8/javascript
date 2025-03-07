/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            xs: ['12px', {
                lineHeight: '16px',
            }],
            sm: ['14px', {
                lineHeight: '20px',
            }],
            base: ['16px', {
                lineHeight: '19.5px',
            }],
            lg: ['18px', {
                lineHeight: '21.94px',
            }],
            xl: ['20px', {
                lineHeight: '24.38px',
            }],
            '2xl': ['24px', {
                lineHeight: '29.26px',
            }],
            '3xl': ['28px', {
                lineHeight: '50px',
            }],
            '4xl': ['48px', {
                lineHeight: '58px',
            }],
            '8xl': ['96px', {
                lineHeight: '106px',
            }]
        },
        extend: {
            fontFamily: {
                palanquin: ['Palanquin', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                'primary': "#ECEEFF",
                "coral-red": "#FF6452",
                "slate-gray": "#6D6D6D",
                "pale-blue": "#F5F6FF",
                "white-400": "rgba(255, 255, 255, 0.80)"
            },
            boxShadow: {
                '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
            },
            backgroundImage: {
                'hero': "url('assets/images/collection-background.svg')",
                'card': "url('assets/images/thumbnail-background.svg')",
            },
            screens: {
                wide: "140px"
            }
        },
    },
    plugins: [],
}