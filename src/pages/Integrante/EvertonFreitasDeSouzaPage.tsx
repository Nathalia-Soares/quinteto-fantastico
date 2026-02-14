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

export function EvertonFreitasDeSouzaPage() {
    return (
        <PageContainer>
            <Header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Avatar>
                    <img
                        src='/everton.png'
                        alt='Foto de perfil de Everton Freitas'
                    />
                </Avatar>
                <Name>Everton Freitas de Souza</Name>
                <Role>Desenvolvedor de Software Full Stack</Role>
            </Header>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <SectionTitle>Sobre</SectionTitle>
                <Paragraph>
                    Desenvolvedor em transição de carreira com experiência na
                    área comercial, unindo visão de negócio ao desenvolvimento
                    de software. Estudante de Desenvolvimento de Software
                    Multiplataforma, com foco em tecnologias modernas como
                    TypeScript, Node.js e Python. Possui experiência prática em
                    projetos acadêmicos envolvendo Machine Learning (análise de
                    dados), criação de APIs RESTful e interesse em tecnologias
                    emergentes como Cloud Computing (Azure) e Realidade Virtual.
                    Familiarizado com metodologias ágeis e focado em escrever
                    código limpo e eficiente.
                </Paragraph>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SectionTitle>Experiência e Projetos</SectionTitle>

                <ExperienceItem>
                    <JobTitle>
                        Desenvolvedor Web Frontend (Projeto Acadêmico)
                    </JobTitle>
                    <Company>Fatec Cotia</Company>
                    <Period>Janeiro/2026 - Momento Atual</Period>
                    <JobDescription>
                        Desenvolvimento de uma aplicação web colaborativa para
                        apresentação de portfólios de engenharia de software.
                        Desenvolvido com TypeScript e React.js, com foco na
                        estruturação de páginas com design moderno, animações
                        fluidas e experiência do usuário (UX). Aplicação de boas
                        práticas de versionamento com Git.
                    </JobDescription>
                </ExperienceItem>

                <ExperienceItem>
                    <JobTitle>
                        Desenvolvedor Full Stack (Projeto Integrador -
                        MedInventory)
                    </JobTitle>
                    <Company>Fatec Cotia</Company>
                    <Period>Agosto/2025 - Momento Atual</Period>
                    <JobDescription>
                        Desenvolvimento de uma solução mobile robusta para
                        gestão de ativos médicos críticos em instituições de
                        saúde. A aplicação, construída com React Native e Expo,
                        foca no controle em tempo real de equipamentos e
                        conformidade regulatória. A estrutura conta com uma
                        arquitetura baseada em componentes (Component-Based
                        Architecture), gerenciamento de estado global via
                        Context API e navegação complexa. O projeto prioriza a
                        criação de dashboards de métricas, segurança na
                        autenticação e interfaces de alta performance para o
                        ambiente hospitalar.
                    </JobDescription>
                </ExperienceItem>

                <ExperienceItem>
                    <JobTitle>
                        Pesquisador em Machine Learning (Projeto Acadêmico)
                    </JobTitle>
                    <Company>Fatec Cotia</Company>
                    <Period>Setembro/2025 - Dezembro/2025</Period>
                    <JobDescription>
                        Análise de dados de acidentes de moto utilizando
                        algoritmos de Machine Learning. Responsável pela limpeza
                        de dados, análise estatística e implementação de modelos
                        preditivos para identificação de padrões de risco.
                    </JobDescription>
                </ExperienceItem>

                <ExperienceItem>
                    <JobTitle>Vendedor (Transição de Carreira)</JobTitle>
                    <Company>On Time Relógios</Company>
                    <Period>Maio/2018 - Momento Atual</Period>
                    <JobDescription>
                        Atuação estratégica com foco em metas e atendimento ao
                        cliente. Desenvolvimento de soft skills como comunicação
                        assertiva, resolução de problemas complexos e trabalho
                        sob pressão, competências agora aplicadas à engenharia
                        de software e análise de requisitos.
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
                    <DegreeTitle>
                        Desenvolvimento de Software Multiplataforma
                    </DegreeTitle>
                    <Institution>Fatec Cotia</Institution>
                    <EducationPeriod>
                        Agosto/2023 - Período atual
                    </EducationPeriod>
                    <EducationDescription>
                        Formação focada em desenvolvimento Full Stack
                        (Web/Mobile), Engenharia de Software, Cloud Computing e
                        Banco de Dados.
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
                    <DegreeTitle>Técnico em Administração</DegreeTitle>
                    <Institution>Etec Cotia</Institution>
                    <EducationPeriod>Agosto/2016 - Agosto/2017</EducationPeriod>
                    <EducationDescription>
                        Formação voltada à gestão de recursos financeiros,
                        materiais e humanos, com ênfase em planejamento
                        estratégico, processos operacionais, comunicação
                        empresarial e rotinas administrativas.
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
                    <ContactLink href='mailto:everton.souza33@fatec.sp.gov.br'>
                        📧 everton.souza33@fatec.sp.gov.br
                    </ContactLink>
                    <ButtonGroup>
                        <Button
                            href='https://www.linkedin.com/in/everton-freitas-191b7757/'
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            💼 LinkedIn
                        </Button>
                        <Button
                            href='https://github.com/DrK-ToN'
                            target='_blank'
                            rel='noopener noreferrer'
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
