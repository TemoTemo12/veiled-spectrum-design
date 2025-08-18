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
				// Custom mystery theme colors
				'electric-blue': 'hsl(var(--electric-blue))',
				'deep-purple': 'hsl(var(--deep-purple))',
				'charcoal': 'hsl(var(--charcoal))',
				'void': 'hsl(var(--void))',
				'steel': 'hsl(var(--steel))',
				'ghost': 'hsl(var(--ghost))'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-mystery': 'var(--gradient-mystery)',
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-glow': 'var(--gradient-glow)',
			},
			boxShadow: {
				'mystery': 'var(--shadow-mystery)',
				'electric': 'var(--shadow-electric)',
				'purple': 'var(--shadow-purple)',
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
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
					},
					'25%': {
						transform: 'translateY(-20px) rotate(2deg)',
					},
					'50%': {
						transform: 'translateY(-10px) rotate(0deg)',
					},
					'75%': {
						transform: 'translateY(-30px) rotate(-2deg)',
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.2)',
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.4)',
					}
				},
				'drift': {
					'0%': {
						transform: 'translateX(0px) translateY(0px)',
					},
					'25%': {
						transform: 'translateX(10px) translateY(-10px)',
					},
					'50%': {
						transform: 'translateX(-5px) translateY(-20px)',
					},
					'75%': {
						transform: 'translateX(-10px) translateY(-10px)',
					},
					'100%': {
						transform: 'translateX(0px) translateY(0px)',
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'drift': 'drift 8s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
