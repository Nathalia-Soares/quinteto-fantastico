import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { breakpoints, spacing } from '../../styles/theme';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${spacing.md} ${spacing.xl};
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  color: var(--text);
  text-decoration: none;

  &:hover {
    color: var(--text);
  }
`;

const ThemeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--card-bg);
  color: var(--text);
  cursor: pointer;
  font-size: 1.25rem;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: var(--border);
  }

  @media (min-width: ${breakpoints.md}) {
    width: 44px;
    height: 44px;
  }
`;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <NavInner>
        <Logo to="/">Quinteto Fantástico</Logo>
        <ThemeButton
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </ThemeButton>
      </NavInner>
    </Nav>
  );
}
