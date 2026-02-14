import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, spacing, transitions } from '../../styles/theme';

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${spacing.section} ${spacing.xl};
  color: var(--text);

  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing.xl} ${spacing.md};
  }
`;

const Header = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spacing.xxl};
  text-align: center;
`;

const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${spacing.xl};
  border: 4px solid var(--border);
  box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 ${spacing.sm};
  color: var(--text);

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Role = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--accent);
  margin: 0;
`;

const Section = styled(motion.section)`
  margin-bottom: ${spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 ${spacing.lg};
  color: var(--text);
  border-bottom: 2px solid var(--border);
  padding-bottom: ${spacing.sm};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0 0 ${spacing.md};
  text-align: justify;
`;

const ExperienceItem = styled.div`
  margin-bottom: ${spacing.xl};
  padding: ${spacing.lg};
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: transform 0.3s ${transitions.smooth},
              box-shadow 0.3s ${transitions.smooth};

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 ${spacing.xs};
`;

const Company = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: ${spacing.xs};
`;

const Period = styled.div`
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: ${spacing.md};
  font-style: italic;
`;

const JobDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
  text-align: justify;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const ContactLink = styled.a`
  font-size: 1rem;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.25s ${transitions.smooth};
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};

  &:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.md};
  flex-wrap: wrap;
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  padding: 0.75rem 2rem;
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

const EducationItem = styled.div`
  padding: ${spacing.lg};
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
`;

const DegreeTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 ${spacing.xs};
`;

const Institution = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: ${spacing.xs};
`;

const EducationPeriod = styled.div`
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: ${spacing.md};
  font-style: italic;
`;

const EducationDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
  text-align: justify;
`;

export function NathaliaSoaresDeOliveiraPage() {
  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar>
          <img src="/nathalia.png" alt="Nathália Soares" />
        </Avatar>
        <Name>Nathália Soares de Oliveira</Name>
        <Role>Desenvolvedora de Software Backend</Role>
      </Header>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionTitle>Sobre</SectionTitle>
        <Paragraph>
          Nathália é desenvolvedora com experiência em backend (Java, Kotlin, Spring Boot), banco de dados relacionais (MySQL, Postgres), não-relacionais (MongoDB e Redis), computação em nuvem (AWS, Azure), metodologias ágeis (Scrum, Kanban) e interesse em arquiteturas escaláveis, robustas e resilientes, testes automatizados e CI/CD. Finalista da Feteps 2024, com o projeto "DeVerGente - Rede social para pessoas neurodivergentes", além de ter atuado como monitora das disciplinas de Desenvolvimento de Software Multiplataforma na Fatec Cotia.
        </Paragraph>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Experiência</SectionTitle>
        
        <ExperienceItem>
          <JobTitle>Software Engineer I</JobTitle>
          <Company>Grupo OLX</Company>
          <Period>Agosto/2025 - Período atual</Period>
          <JobDescription>
            Atua no desenvolvimento e manutenção de soluções internas das stacks de gestão de leads, chat, anúncios e integrações, com foco em backend. Contribui para a implementação de boas práticas de engenharia, padrões de código, integração contínua e melhorias de performance. Participa do ciclo completo do desenvolvimento, incluindo automação, testes e deploy.
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Software Engineer Intern</JobTitle>
          <Company>Grupo OLX</Company>
          <Period>Maio/2024 - Agosto/2025</Period>
          <JobDescription>
            Atuou como estagiária em engenharia de software na stack de mídias, apoiando o desenvolvimento de funcionalidades e melhorias em sistemas internos. Participou de atividades práticas de backend, integração com APIs, estruturação de bancos de dados, versionamento e qualidade de código. Colaborou com a equipe em rotinas de CI/CD, testes e monitoramento.
          </JobDescription>
        </ExperienceItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SectionTitle>Formação</SectionTitle>
        
        <EducationItem>
          <DegreeTitle>Desenvolvimento de Software Multiplataforma</DegreeTitle>
          <Institution>Fatec Cotia</Institution>
          <EducationPeriod>Fevereiro/2023 - Período atual</EducationPeriod>
          <EducationDescription>
            Formação voltada ao desenvolvimento full stack, arquitetura de sistemas, banco de dados, engenharia de software e computação em nuvem.
          </EducationDescription>
        </EducationItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SectionTitle>Formações complementares</SectionTitle>
        
        <EducationItem>
          <DegreeTitle>Arquitetura e Urbanismo</DegreeTitle>
          <Institution>Uninove</Institution>
          <EducationPeriod>Fevereiro/2009 - Dezembro/2013</EducationPeriod>
          <EducationDescription>
            Formação voltada a projetos arquitetônicos, urbanísticos, paisagísticos e de interiores, com ênfase em sustentabilidade, inovação e tecnologia.
          </EducationDescription>
        </EducationItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle>Contato</SectionTitle>
        <ContactInfo>
          <ContactLink href="mailto:nathalia.oliveira24@fatec.sp.gov.br">
            📧 nathalia.oliveira24@fatec.sp.gov.br
          </ContactLink>
          <ButtonGroup>
            <Button 
              href="https://www.linkedin.com/in/nathália-soares-77430328b/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              💼 LinkedIn
            </Button>
            <Button 
              href="https://github.com/Nathalia-Soares" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              💻 Github
            </Button>
          </ButtonGroup>
        </ContactInfo>
      </Section>
    </PageContainer>
  );
}
