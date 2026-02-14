import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { TeamMember } from '../../types';
import { breakpoints, spacing, transitions } from '../../styles/theme';

const Card = styled(motion.article)`
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: ${spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.4s ${transitions.smooth},
    transform 0.4s ${transitions.smooth},
    border-color 0.4s ${transitions.smooth};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(135deg, transparent 40%, color-mix(in srgb, var(--accent) 25%, transparent) 50%, transparent 60%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ${transitions.smooth};
    pointer-events: none;
  }

  &:hover {
    box-shadow:
      0 24px 48px -16px rgba(0, 0, 0, 0.18),
      0 0 0 1px var(--border);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.md}) {
    &:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow:
        0 32px 64px -20px rgba(0, 0, 0, 0.22),
        0 0 0 1px var(--border);
    }
  }
`;

const Avatar = styled(motion.div)`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${spacing.lg};
  border: 3px solid var(--border);
  flex-shrink: 0;
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 112px;
    height: 112px;
  }
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0 0 ${spacing.xs};
`;

const Cargo = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: ${spacing.md};
  display: block;
`;

const Description = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 ${spacing.lg};
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LinkButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  min-width: 140px;
  background: var(--accent);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: background-color 0.25s ${transitions.smooth},
    transform 0.25s ${transitions.smooth},
    box-shadow 0.25s ${transitions.smooth};

  &:hover {
    background: var(--accent-hover);
    color: white;
    box-shadow: 0 8px 24px -6px color-mix(in srgb, var(--accent) 45%, transparent);
  }
`;

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <Card
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <Avatar
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      >
        <img src={member.foto} alt={member.nome} loading="lazy" />
      </Avatar>
      <Name>{member.nome}</Name>
      <Cargo>{member.cargo}</Cargo>
      <Description>{member.descricao}</Description>
      <LinkButton
        to={`/integrante/${member.slug}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Ver perfil
      </LinkButton>
    </Card>
  );
}
