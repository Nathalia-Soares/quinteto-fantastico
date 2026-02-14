import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { breakpoints, spacing } from "../../styles/theme";

const PHRASES = [
  "Nosso Time",
  "Cinco profissionais.",
  "Um time, muitos sonhos.",
  "Experiências com propósito.",
];

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const Section = styled(motion.section)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.md} ${spacing.lg} ${spacing.lg};
  max-width: 1100px;
  margin: 0 auto;
  min-height: min(42vh, 320px);

  @media (min-width: ${breakpoints.md}) {
    padding: ${spacing.lg} ${spacing.lg} ${spacing.xl};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sm};
  text-align: center;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: ${spacing.xl};
    text-align: left;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.xs};

  @media (min-width: ${breakpoints.md}) {
    align-items: flex-start;
    flex: 1;
    max-width: 520px;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 0.25rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  border-radius: 6px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.15;
  color: var(--text);
  margin: 0;
  min-height: 1.2em;
  white-space: nowrap;

  span.accent {
    background: linear-gradient(
      135deg,
      var(--accent) 0%,
      color-mix(in srgb, var(--accent) 70%, #a78bfa) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 0.9em;
  background: var(--accent);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 0.8s step-end infinite;
`;

const Subtitle = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
  max-width: 400px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1rem;
  }
`;

const CHAR_DELAY_MS = 85;
const DELETE_DELAY_MS = 45;
const PAUSE_AT_END_MS = 2200;
const PAUSE_AFTER_DELETE_MS = 400;

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const hasShownSubtitle = useRef(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];

    if (pauseRef.current) {
      clearTimeout(pauseRef.current);
      pauseRef.current = null;
    }

    if (!isDeleting) {
      if (visibleText.length < phrase.length) {
        const t = setTimeout(() => {
          setVisibleText(phrase.slice(0, visibleText.length + 1));
        }, CHAR_DELAY_MS);
        return () => clearTimeout(t);
      } else {
        if (!hasShownSubtitle.current) {
          hasShownSubtitle.current = true;
          setSubtitleVisible(true);
        }
        pauseRef.current = setTimeout(
          () => setIsDeleting(true),
          PAUSE_AT_END_MS,
        );
        return () => {
          if (pauseRef.current) clearTimeout(pauseRef.current);
        };
      }
    } else {
      if (visibleText.length > 0) {
        const t = setTimeout(() => {
          setVisibleText(phrase.slice(0, visibleText.length - 1));
        }, DELETE_DELAY_MS);
        return () => clearTimeout(t);
      } else {
        pauseRef.current = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }, PAUSE_AFTER_DELETE_MS);
        return () => {
          if (pauseRef.current) clearTimeout(pauseRef.current);
        };
      }
    }
  }, [phraseIndex, visibleText, isDeleting]);

  const phrase = PHRASES[phraseIndex];
  const showAccent = phrase === "Nosso Time" && visibleText === phrase;

  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Content>
        <Left>
          <Badge>Quinteto Fantástico</Badge>
          <Title>
            {showAccent ? (
              <>
                Nosso <span className="accent">Time</span>
              </>
            ) : (
              <>
                {visibleText}
                <Cursor />
              </>
            )}
          </Title>
          {subtitleVisible && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Subtitle>
                Conheça quem constrói experiências digitais com propósito.
              </Subtitle>
            </motion.div>
          )}
        </Left>
      </Content>
    </Section>
  );
}
