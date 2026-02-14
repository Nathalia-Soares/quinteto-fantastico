import { createGlobalStyle } from 'styled-components';
import { colors, transitions } from './theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${() => 'var(--bg)'};
    color: ${() => 'var(--text)'};
    transition: ${transitions.theme};
  }

  :root[data-theme="light"] {
    --bg: ${colors.light.background};
    --bg-secondary: ${colors.light.backgroundSecondary};
    --text: ${colors.light.text};
    --text-muted: ${colors.light.textMuted};
    --accent: ${colors.light.accent};
    --accent-hover: ${colors.light.accentHover};
    --border: ${colors.light.border};
    --card-bg: ${colors.light.cardBg};
    --nav-bg: ${colors.light.navBg};
  }

  :root[data-theme="dark"] {
    --bg: ${colors.dark.background};
    --bg-secondary: ${colors.dark.backgroundSecondary};
    --text: ${colors.dark.text};
    --text-muted: ${colors.dark.textMuted};
    --accent: ${colors.dark.accent};
    --accent-hover: ${colors.dark.accentHover};
    --border: ${colors.dark.border};
    --card-bg: ${colors.dark.cardBg};
    --nav-bg: ${colors.dark.navBg};
  }
`;
