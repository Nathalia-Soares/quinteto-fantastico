import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const Track = styled.div`
  width: 24px;
  height: 40px;
  border: 2px solid var(--border);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;

const Thumb = styled(motion.div)`
  width: 4px;
  height: 8px;
  background: var(--accent);
  border-radius: 2px;
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translateX(-50%);
`;

export function ScrollIndicator() {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <Label>Scroll</Label>
      <Track>
        <Thumb
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Track>
    </Wrapper>
  );
}
