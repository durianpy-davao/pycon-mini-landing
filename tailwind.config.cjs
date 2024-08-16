import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: '#6c63a6',
        pycon: {
          purple: '#8428f5',
          darkPurple: '#2a0455',
          yellow: '#fef85d',
        },
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        blippo: 'var(--font-blippo)',
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
// edit variables at CustomeSytles.astro
