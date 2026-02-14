import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, spacing, transitions } from "../../styles/theme";

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
  transition:
    transform 0.3s ${transitions.smooth},
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

const JobDescription = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
  text-align: justify;

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }
  li {
    margin-bottom: 0.35rem;
  }
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
  transition:
    background-color 0.25s ${transitions.smooth},
    transform 0.25s ${transitions.smooth},
    box-shadow 0.25s ${transitions.smooth};

  &:hover {
    background: var(--accent-hover);
    color: white;
    box-shadow: 0 8px 24px -6px
      color-mix(in srgb, var(--accent) 45%, transparent);
  }
`;

const EducationItem = styled.div`
  margin-bottom: ${spacing.xl};
  padding: ${spacing.lg};
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;

  &:last-child {
    margin-bottom: 0;
  }
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

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.md};

  span {
    padding: 0.4rem 0.75rem;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.9rem;
    color: var(--text-muted);
  }
`;

const AwardItem = styled.div`
  padding: ${spacing.sm} 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.95rem;
  color: var(--text-muted);

  &:last-child {
    border-bottom: none;
  }
`;

export function MoisesGoncalvesPage() {
  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar>
          <img src="/moises.png" alt="Moises Gonçalves" />
        </Avatar>
        <Name>Moises Gonçalves</Name>
        <Role>
          Software Engineer @ OLX · TypeScript · JavaScript · Node · AWS
        </Role>
      </Header>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <SectionTitle>Sobre</SectionTitle>
        <Paragraph>
          Sou um desenvolvedor de software multiplataforma em formação na FATEC
          e estudante de Engenharia de Software na Uninter. Tenho conhecimento
          em linguagens de programação e tecnologias modernas, incluindo Python,
          C, C++, Java, HTML, CSS, JavaScript, React, SQL e mais. Minha formação
          técnica no SENAI em Eletromecânica, Mecânica de Precisão e
          Equipamentos Biomédicos me fornece uma base sólida para entender e
          desenvolver soluções em IoT e automação.
        </Paragraph>
        <Paragraph>
          Possuo habilidades em análise de dados usando Power BI, permitindo
          transformar dados brutos em insights acionáveis. Tenho um forte foco
          em UI/UX, utilizando Figma para projetar interfaces intuitivas. Sou
          proativo, curioso, com ótimas habilidades de comunicação, colaboro
          eficazmente com equipes multidisciplinares e tenho paixão contínua por
          tecnologia e inovação.
        </Paragraph>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionTitle>Principais competências</SectionTitle>
        <SkillsList>
          <span>Python</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>HTML & CSS</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>Power BI</span>
          <span>Figma</span>
          <span>Metodologias Agile</span>
          <span>Kanban</span>
          <span>Scrum</span>
          <span>AWS</span>
        </SkillsList>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <SectionTitle>Idiomas</SectionTitle>
        <Paragraph>
          Inglês (Professional Working) · Português (Native or Bilingual)
        </Paragraph>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.14 }}
      >
        <SectionTitle>Prêmios e destaques</SectionTitle>
        <AwardItem>Prêmio Destaque Ouro</AwardItem>
        <AwardItem>Prêmio Destaque Prata</AwardItem>
        <AwardItem>Prêmio Inovação 2023 - Melhoria de Processo</AwardItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <SectionTitle>Experiência</SectionTitle>

        <ExperienceItem>
          <JobTitle>Software Engineer</JobTitle>
          <Company>Grupo OLX</Company>
          <Period>Dezembro de 2025 - Presente (3 meses)</Period>
          <JobDescription>
            Atuação em desenvolvimento de software com foco em TypeScript,
            JavaScript, Node e AWS.
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Software Developer</JobTitle>
          <Company>Magnamed</Company>
          <Period>
            Julho de 2025 - Dezembro de 2025 (6 meses) · São Paulo, Brazil
          </Period>
          <JobDescription>
            Desenvolvimento de software e soluções digitais.
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Project Analyst</JobTitle>
          <Company>E-MED Equipamentos Médicos</Company>
          <Period>Maio de 2025 - Julho de 2025 (3 meses)</Period>
          <JobDescription>
            Análise de projetos e suporte à área de equipamentos médicos.
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Software Engineer</JobTitle>
          <Company>Grupo OLX</Company>
          <Period>Outubro de 2024 - Maio de 2025 (8 meses)</Period>
          <JobDescription>
            Desenvolvimento e manutenção de soluções com foco em backend e
            integrações.
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Mechanical Technician</JobTitle>
          <Company>Magnamed</Company>
          <Period>Agosto de 2019 - Setembro de 2024 (5 anos e 2 meses)</Period>
          <JobDescription>
            <ul>
              <li>
                Suporte à linha de produção e manutenção em equipamentos
                (ventiladores pulmonares)
              </li>
              <li>
                Desenvolvimento de dispositivos para teste e melhoria de
                processos e produtos
              </li>
              <li>
                Desenvolvimento de FMEA de Processo, análise de falhas e
                relatórios técnicos
              </li>
              <li>
                Instruções, procedimentos e treinamentos; análise e reparo de
                circuitos eletrônicos
              </li>
              <li>
                Atualização e testes de software; análise de componentes
                mecânicos e interpretação de desenho técnico
              </li>
            </ul>
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Planejamento e Controle de Manutenção</JobTitle>
          <Company>Mills Estruturas e Serviços de Engenharia S.A.</Company>
          <Period>Maio de 2018 - Julho de 2019 (1 ano e 3 meses)</Period>
          <JobDescription>
            <ul>
              <li>
                Planejamento e controle de manutenção; fechamento de ordens de
                serviço
              </li>
              <li>
                Gerenciamento de planos de preventiva interna e externa;
                relatórios e indicadores
              </li>
              <li>
                Utilização do sistema SAP; requisições e pedidos de compra;
                compra de consumíveis e ferramentas
              </li>
            </ul>
          </JobDescription>
        </ExperienceItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Formação acadêmica</SectionTitle>

        <EducationItem>
          <DegreeTitle>Desenvolvimento de Software Multiplataforma</DegreeTitle>
          <Institution>
            Fatec Cotia - Faculdade de Tecnologia de Cotia
          </Institution>
          <EducationPeriod>Agosto de 2023 - Julho de 2026</EducationPeriod>
          <EducationDescription>
            Formação voltada ao desenvolvimento full stack, arquitetura de
            sistemas, banco de dados e engenharia de software.
          </EducationDescription>
        </EducationItem>

        <EducationItem>
          <DegreeTitle>Bacharelado em Engenharia de Software</DegreeTitle>
          <Institution>UNINTER Centro Universitário Internacional</Institution>
          <EducationPeriod>Julho de 2023 - Junho de 2027</EducationPeriod>
          <EducationDescription>
            Graduação em Engenharia de Software com foco em análise,
            desenvolvimento e gestão de projetos.
          </EducationDescription>
        </EducationItem>

        <EducationItem>
          <DegreeTitle>
            Eleromecânica, Mecânica de Precisão e Equipamentos Biomédicos
          </DegreeTitle>
          <Institution>Senai São Paulo</Institution>
          <EducationPeriod>2017 - 2023</EducationPeriod>
          <EducationDescription>
            Ensino técnico em equipamentos biomédicos, manutenção e suporte.
          </EducationDescription>
        </EducationItem>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SectionTitle>Contato</SectionTitle>
        <ContactInfo>
          <ContactLink href="mailto:moises_goncalves@outlook.com.br">
            📧 moises_goncalves@outlook.com.br
          </ContactLink>
          <ButtonGroup>
            <Button
              href="https://www.linkedin.com/in/moisesgonçalves/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              💼 LinkedIn
            </Button>
            <Button
              href="https://github.com/MoisesG01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              💻 GitHub
            </Button>
          </ButtonGroup>
        </ContactInfo>
      </Section>
    </PageContainer>
  );
}
