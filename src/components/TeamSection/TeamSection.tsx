import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TeamCard } from '../TeamCard';
import { teamMembers } from '../../data/teamMembers';
import { breakpoints, spacing } from '../../styles/theme';

const AUTO_SPEED = 1.1;

const Section = styled(motion.section)`
  padding: ${spacing.xxl} 0 ${spacing.section};
  overflow: hidden;
`;

const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: ${spacing.xxl};
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${spacing.lg};
`;

const Eyebrow = styled(motion.span)`
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: ${spacing.sm};
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--text);
  margin: 0 0 ${spacing.md};
`;

const SectionDesc = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  cursor: grab;
  user-select: none;
  padding: 24px 0;
  margin: -24px 0;

  &:active {
    cursor: grabbing;
  }

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
`;

const CarouselTrack = styled.div<{ $offset: number; $isDragging: boolean }>`
  display: flex;
  width: max-content;
  gap: ${spacing.lg};
  padding: 0 ${spacing.lg};
  transform: translateX(${(p) => -p.$offset}px);
  transition: transform ${(p) => (p.$isDragging ? '0s' : '0.1s linear')};

  @media (min-width: ${breakpoints.sm}) {
    gap: ${spacing.xl};
  }
`;

const Slide = styled.div`
  flex: 0 0 300px;
  min-width: 300px;

  @media (min-width: ${breakpoints.sm}) {
    flex: 0 0 320px;
    min-width: 320px;
  }

  @media (min-width: ${breakpoints.lg}) {
    flex: 0 0 340px;
    min-width: 340px;
  }
`;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function TeamSection() {
  const duplicatedMembers = [...teamMembers, ...teamMembers];
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [setWidth, setSetWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const didDrag = useRef(false);

  const wrapOffset = useCallback((value: number) => {
    if (setWidth <= 0) return value;
    let v = value % setWidth;
    if (v < 0) v += setWidth;
    return v;
  }, [setWidth]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(() => {
      setSetWidth(track.scrollWidth / 2);
    });
    ro.observe(track);
    setSetWidth(track.scrollWidth / 2);
    return () => ro.disconnect();
  }, [duplicatedMembers.length]);

  useEffect(() => {
    if (isDragging || setWidth <= 0) return;
    let raf = 0;
    const tick = () => {
      setScrollOffset((prev) => wrapOffset(prev + AUTO_SPEED));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isDragging, setWidth, wrapOffset]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    didDrag.current = false;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartOffset.current = scrollOffset;
  }, [scrollOffset]);

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      const delta = dragStartX.current - e.clientX;
      if (Math.abs(delta) > 5) didDrag.current = true;
      setScrollOffset(wrapOffset(dragStartOffset.current + delta));
    };
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, wrapOffset]);

  const handleClickCapture = useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <SectionHeader>
        <Eyebrow variants={item}>O time</Eyebrow>
        <SectionTitle variants={item}>Integrantes</SectionTitle>
        <SectionDesc variants={item}>
          Arraste com o mouse para navegar. Clique em um card para ver o perfil completo.
        </SectionDesc>
      </SectionHeader>

      <CarouselWrapper onMouseDown={handleMouseDown} onClickCapture={handleClickCapture}>
        <CarouselTrack
          ref={trackRef}
          $offset={scrollOffset}
          $isDragging={isDragging}
        >
          {duplicatedMembers.map((member, index) => (
            <Slide key={`${member.id}-${index}`}>
              <TeamCard member={member} index={index % teamMembers.length} />
            </Slide>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </Section>
  );
}
