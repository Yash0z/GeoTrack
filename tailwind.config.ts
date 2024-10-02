import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "375px",
        sm: "420px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1400px",
      },
    },
  	extend: {
      fontFamily: {
         Euclid: ['var(--font-EuclidRegular)'],
         ClashGrotex: ['var(--font-ClashGrotesk)'],
         Satoshi: ['var(--font-Satoshi)'],
         Satoshi_B: ['var(--font-Satoshi_B)'],
       
       },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
         text:'hsl(var(--text))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			txtmuted: {
  				DEFAULT: 'hsl(var(--text-muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        typoraphy: {
         DEFAULT: {
            css: {
               "*": {

                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  fontFamily: "Satoshi",
                  color: "inherit",
               },
            },
         },
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
