import React from 'react';
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

export function HenriqueAlmeidaMarquesPage() {
  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar>
          <img src="/henrique.png" alt="Henrique Marques" />
        </Avatar>
        <Name>Henrique Marques</Name>
        <Role>
          Desenvolvedor Full Stack • Automação & Sistemas Industriais
        </Role>
      </Header>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <SectionTitle>Sobre</SectionTitle>
        <Paragraph>
          Desenvolvedor em formação com experiência em suprimentos e planejamento de produção,
           unindo visão industrial à tecnologia. Atualmente cursando Desenvolvimento de Software
           Multiplataforma na FATEC Cotia, com foco em desenvolvimento web, automações e integração
           entre software e hardware. Possuo interesse e prática em projetos envolvendo sensores e atuadores,
           além de estudos em modelagem mecânica, lógica de controle e fundamentos de robótica.
           Também possuo conhecimento em conceitos de CLP e lógica de automação industrial, explorando a aplicação
           de programação em sistemas físicos e automação de processos.
        </Paragraph>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <SectionTitle>Experiências</SectionTitle>

        <ExperienceItem>
          <JobTitle>Líder de Suprimentos e PCP</JobTitle>
          <Company>Vicon Máquinas Agrícolas</Company>
          <Period>Abril de 2017 - Presente </Period>
          <JobDescription>
              <ul>
                <li>Planejamento e controle da produção, garantindo cumprimento de prazos e metas industriais</li>
                <li>Gestão de compras técnicas e negociação com fornecedores nacionais e internacionais</li>
                <li>Análise de MRP, controle de estoque e redução de rupturas de materiais</li>
                <li>Interface direta com engenharia, produção e área comercial</li>
                <li>Desenvolvimento de controles automatizados para melhoria de processos</li>
                <li>Acompanhamento de indicadores (KPIs) de suprimentos e performance produtiva</li>
                <li>Suporte à tomada de decisão com base em dados e análise de demanda</li>
             </ul>
          </JobDescription>
        </ExperienceItem>

        <ExperienceItem>
          <JobTitle>Suporte T.I e Infraestrutura</JobTitle>
          <Company>Blau Farmacêutica</Company>
          <Period>
            Janeiro de 2016 - Março de 2017 (14 meses) · São Paulo, Brazil
          </Period>
          <JobDescription>
              <ul>
               <li>Suporte técnico a usuários e manutenção de equipamentos</li>
               <li>Instalação e configuração de softwares e sistemas</li>
               <li>Suporte a redes locais (LAN) e infraestrutura básica</li>
               <li>Diagnóstico e resolução de problemas técnicos</li>
               <li>Organização de ativos e controle de inventário de TI</li>
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
      </Section>

<Section>
  <SectionTitle>Formações Complementares</SectionTitle>

   <EducationItem>
    <DegreeTitle>Gestão e Técnicas de Compras</DegreeTitle>
    <Institution>FGV – Fundação Getulio Vargas</Institution>
    <EducationPeriod>2025</EducationPeriod>
    <EducationDescription>
      Capacitação em estratégias de compras, negociação com fornecedores,
      análise de custos, gestão de contratos e tomada de decisão baseada
      em indicadores de desempenho.
    </EducationDescription>
  </EducationItem>

  <EducationItem>
  <DegreeTitle>Aspire Leaders Program (ALP)</DegreeTitle>
  <Institution>Aspire Institute</Institution>
  <EducationPeriod>2026 (em andamento)</EducationPeriod>
  <EducationDescription>
    Programa internacional de desenvolvimento de liderança com duração
    de 9 semanas, focado em formação de futuros líderes globais.
    Ênfase em mentoria, desenvolvimento de marca pessoal, networking
    internacional e construção de impacto em comunidades.
  </EducationDescription>
</EducationItem>

  <EducationItem>
    <DegreeTitle>Ferramentas de Gestão e Empreendedorismo</DegreeTitle>
    <Institution>SENAC</Institution>
    <EducationPeriod>2025</EducationPeriod>
    <EducationDescription>
      Curso voltado à gestão estratégica, análise de mercado,
      planejamento e tomada de decisão empresarial.
    </EducationDescription>
  </EducationItem>

  <EducationItem>
    <DegreeTitle>Programador de Produção</DegreeTitle>
    <Institution>SENAI</Institution>
    <EducationPeriod>2025</EducationPeriod>
    <EducationDescription>
      Formação técnica com foco em planejamento industrial,
      controle de processos produtivos e organização da produção.
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
          <ContactLink href="mailto:henrique.al.marques@outlook.com.br">
            📧 henrique.al.marques@outlook.com.br
          </ContactLink>
          <ButtonGroup>
            <Button
              href="https://www.linkedin.com/in/henrique-marques-389647224/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              💼 LinkedIn
            </Button>
            <Button
              href="https://github.com/HenriqueMarquesAl"
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
