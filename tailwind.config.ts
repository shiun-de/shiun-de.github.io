import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-monospace', '"SFMono-Regular"', 'Menlo', 'Consolas', 'monospace'],
        mono: ['ui-monospace', '"SFMono-Regular"', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // legacy keys kept as aliases so straggler imports compile; they all
        // point to the new neutral palette.
        shiun: {
          bg:    '#ffffff',
          text:  '#111111',
          muted: '#555555',
          line:  '#000000',
          accent: '#1a0dab',
        },
      },
    },
  },
  plugins: [],
};

export default config;
