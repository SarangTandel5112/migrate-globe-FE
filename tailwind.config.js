import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-blue': 'var(--primary-blue)',
        'red': 'var(--red)',
        'background-1': 'var(--background-1)',
        // Neutrals
        neutrals: {
          0: 'var(--neutrals-00)',
          100: 'var(--neutrals-100)',
          200: 'var(--neutrals-200)',
          300: 'var(--neutrals-300)',
          400: 'var(--neutrals-400)',
          DEFAULT: 'var(--neutrals-500)',
          600: 'var(--neutrals-600)',
          700: 'var(--neutrals-700)',
          800: 'var(--neutrals-800)',
        },
        // Mint Green
        'mint-green': {
          50: 'var(--mint-green-50)',
          100: 'var(--mint-green-100)',
          200: 'var(--mint-green-200)',
          300: 'var(--mint-green-300)',
          400: 'var(--mint-green-400)',
          DEFAULT: 'var(--mint-green-500)',
          600: 'var(--mint-green-600)',
          700: 'var(--mint-green-700)',
          800: 'var(--mint-green-800)',
          900: 'var(--mint-green-900)',
        },

        // Navy Blue
        'navy-blue': {
          50: 'var(--navy-blue-50)',
          100: 'var(--navy-blue-100)',
          200: 'var(--navy-blue-200)',
          300: 'var(--navy-blue-300)',
          400: 'var(--navy-blue-400)',
          DEFAULT: 'var(--navy-blue-500)',
          600: 'var(--navy-blue-600)',
          700: 'var(--navy-blue-700)',
          800: 'var(--navy-blue-800)',
          900: 'var(--navy-blue-900)',
        },
        boxShadow: {
          navigation: '0 4px 8px 0 rgb(0 0 0 / 24%)'
        }
      },
      fontSize: {
        xs: '0.75rem',   // 12px
        sm: '0.875rem',  // 14px
        base: '1rem',    // 16px (default)
        lg: '1.125rem',  // 18px
        xl: '1.25rem',   // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {

      addComponents({
        '.text-heading1': {
          fontSize: '16px', // Default (mobile)
          // lineHeight: '120%',
          fontWeight: '600',
          // letterSpacing: '-0.02em',
          // fontFamily: theme('fontFamily.space-grotesk').join(', '),
          '@screen md': {
            fontSize: '20px',
          },
          '@screen lg': {
            fontSize: '24px',
          },
        },
        '.text-description1': {
          fontSize: '14px', // Default (mobile)
          // lineHeight: '120%',
          fontWeight: '400',
          // letterSpacing: '-0.02em',
          // fontFamily: theme('fontFamily.space-grotesk').join(', '),
          '@screen md': {
            fontSize: '16px',
          },
          '@screen lg': {
            fontSize: '16px', // Desktop
          },
        },
      })

      addUtilities({
        '.container-1200': {
          maxWidth: '1200px',
          margin: 'auto'
        },
        '.container-1440': {
          maxWidth: '1440px',
          margin: 'auto'
        },
      })
    }),
  ],
}

