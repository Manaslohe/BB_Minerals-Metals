module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        scaleDown: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideOutDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        heightGrow: {
          '0%': { height: '0%' },
          '100%': { height: '100%' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-out': 'fadeOut 0.25s ease-in forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        'scale-up': 'scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-down': 'scaleDown 0.2s ease-in forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
        'slide-out-down': 'slideOutDown 0.25s ease-in forwards',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};