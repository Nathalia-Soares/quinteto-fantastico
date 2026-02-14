import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { spacing } from '../../styles/theme';

const StyledFooter = styled.footer`
  padding: ${spacing.xl} ${spacing.lg};
  text-align: center;
  border-top: 1px solid var(--border);
  margin-top: auto;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  text-decoration: none;
  margin-bottom: ${spacing.sm};

  &:hover {
    color: var(--text);
  }
`;

const Copy = styled.p`
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 0;
`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Inner>
        <Logo to="/">Quinteto Fantástico</Logo>
        <Copy>© {year} — Nosso Time</Copy>
      </Inner>
    </StyledFooter>
  );
}
