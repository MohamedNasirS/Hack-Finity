
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        hackfinity: {
          dark: '#0A0E17',
          darkblue: '#1A1F2C',
          blue: '#1EAEDB',
          skyblue: '#33C3F0',
          white: '#FFFFFF',
          gray: '#8A898C'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'shooting-star': {
          '0%': { 
            transform: 'translateX(0) translateY(0)', 
            opacity: '0'  // Start completely transparent
          },
          '10%': {
            opacity: '0.3'  // Fade in gradually
          },
          '20%': {
            opacity: '1'  // Fully visible
          },
          '80%': {
            opacity: '1'  // Stay visible for most of the animation
          },
          '100%': { 
            transform: 'translateX(calc(cos(var(--angle, 0deg)) * 100vw)) translateY(calc(sin(var(--angle, 0deg)) * 100vh))', 
            opacity: '0'  // Fade out at the end
          }
        },
        'nebula-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.7' }
        },
        'aurora-wave': {
          '0%': { 
            transform: 'scaleX(1.0) translateX(0%)',
            opacity: '0.4'
          },
          '50%': { 
            transform: 'scaleX(1.1) translateX(3%)',
            opacity: '0.6'
          },
          '100%': { 
            transform: 'scaleX(0.9) translateX(-3%)',
            opacity: '0.3'
          }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'btn-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(30, 174, 219, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(30, 174, 219, 0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shooting-star': 'shooting-star 5s linear forwards',
        'nebula-pulse': 'nebula-pulse 8s ease-in-out infinite',
        'aurora-wave': 'aurora-wave 20s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.6s ease-out',
        'btn-pulse': 'btn-pulse 2s infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
