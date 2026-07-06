/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7EF',
        sand: '#F1E8D6',
        sage: {
          DEFAULT: '#8A9A7B',
          light: '#AEBB9F',
          dark: '#5E6E4F',
        },
        olive: {
          DEFAULT: '#4E5D3A',
          dark: '#38442A',
        },
        emerald: {
          DEFAULT: '#2F4F3A',
          dark: '#1E3327',
        },
        gold: {
          DEFAULT: '#C9A455',
          light: '#E4CD97',
          dark: '#A5822F',
        },
        ink: '#2B2E22',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        script: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at center, rgba(201,164,85,0.18) 0%, rgba(201,164,85,0) 70%)',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(46, 58, 36, 0.25)',
        card: '0 8px 30px rgba(46, 58, 36, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
