import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        neutral: {
          100: 'hsl(180, 52%, 96%)',
          200: 'hsl(180, 31%, 95%)',
          300: 'hsl(180, 8%, 52%)',
          400: 'hsl(180, 14%, 20%)'
        }
      },
      fontFamily: {
        'heading': ['League Spartan', 'sans']
      }
    },
  },
  plugins: [],
}
export default config
