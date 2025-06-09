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
        Primary: {
          0: 'var(--Primary-0)',
          100: 'var(--Primary-100)',
          200: 'var(--Primary-200)',
          300: 'var(--Primary-300)',
          400: 'var(--Primary-400)',
          DEFAULT: 'var(--Primary)',
          600: 'var(--Primary-600)',
          700: 'var(--Primary-700)',
          800: 'var(--Primary-800)',
          900: 'var(--Primary-900)',
          993: 'var(--Primary-993)',
          997: 'var(--Primary-997)'
        },
        neutral: {
          0: 'var(--neutral-0)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          DEFAULT: 'var(--neutral)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)'
        },
        secondary: {
          600: 'var(--secondary-600)',
          DEFAULT: 'var(--secondary)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)'
        },
        tertiary: {
          500: 'var(--tertiary-500)',
          DEFAULT: 'var(--tertiary)',
          700: 'var(--tertiary-700)',
          800: 'var(--tertiary-800)',
          900: 'var(--tertiary-900)'
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
    },
  },
  plugins: [],
}

