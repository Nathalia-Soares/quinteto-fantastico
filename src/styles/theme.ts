export const colors = {
  light: {
    background: '#fafafa',
    backgroundSecondary: '#ffffff',
    text: '#0a0a0a',
    textMuted: '#737373',
    accent: '#6366f1',
    accentHover: '#4f46e5',
    border: 'rgba(0, 0, 0, 0.08)',
    cardBg: 'rgba(255, 255, 255, 0.72)',
    navBg: 'rgba(250, 250, 250, 0.8)',
  },
  dark: {
    background: '#0a0a0a',
    backgroundSecondary: '#141414',
    text: '#fafafa',
    textMuted: '#a3a3a3',
    accent: '#818cf8',
    accentHover: '#a5b4fc',
    border: 'rgba(255, 255, 255, 0.08)',
    cardBg: 'rgba(23, 23, 23, 0.72)',
    navBg: 'rgba(10, 10, 10, 0.8)',
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  section: '5rem',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const transitions = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  theme: 'background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
} as const;
