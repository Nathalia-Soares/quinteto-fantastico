import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Galaxy } from '../Galaxy/Galaxy';
import { breakpoints } from '../../styles/theme';

const Page = styled.main`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* Escuro: overlay sutil para ler texto em cima do Galaxy */
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.5) 0%,
    rgba(10, 10, 10, 0.25) 50%,
    rgba(10, 10, 10, 0.15) 100%
  );

  /* Claro: fundo sólido opaco, Galaxy fica totalmente escondido */
  [data-theme='light'] & {
    background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 50%, #f0f0f0 100%);
  }
`;

const Content = styled.div`
  padding-top: 80px;
  flex: 1;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 88px;
  }
`;

export function Layout() {
  return (
    <Page>
      <BackgroundWrapper>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </BackgroundWrapper>
      <Overlay />
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Page>
  );
}
