/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'bg-card': '#161616',
        'bg-elevated': '#1f1f1f',
        'text-primary': '#ffffff',
        'text-secondary': '#e5e5e5',
        'text-muted': '#a3a3a3',
        'text-disabled': '#737373',
        'accent-blue': '#0ea5e9',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        'accent-pink': '#ec4899',
        'border-primary': '#262626',
        'border-secondary': '#404040',
        'border-accent': '#525252',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #06b6d4 100%)',
        'accent-gradient-alt': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 20px rgba(14, 165, 233, 0.3)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config