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

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${spacing.lg};
`;

const SkillCategory = styled.div`
    padding: ${spacing.lg};
    background: var(--card-bg);
    backdrop-filter: blur(16px);
    border: 1px solid var(--border);
    border-radius: 16px;
`;

const SkillCategoryTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent);
    margin: 0 0 ${spacing.md};
`;

const SkillList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm};

    li {
        font-size: 0.95rem;
        color: var(--text-muted);
        padding-left: ${spacing.md};
        position: relative;

        &:before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent);
            font-weight: bold;
        }
    }
`;

export function GiovannaFariaItalianiPage() {
    return (
        <PageContainer>
            <Header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Avatar>
                    <img
                        src='/giovanna.png'
                        alt='Foto de perfil de Giovanna Faria Italiani'
                    />
                </Avatar>
                <Name>Giovanna Faria Italiani</Name>
                <Role>Estagiária da Qualidade 121</Role>
            </Header>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <SectionTitle>Sobre</SectionTitle>
                <Paragraph>
                    Desenvolvedora de software em formação na FATEC, apaixonada
                    por excelência e inovação. Profissional dedicada com
                    experiência em Quality Assurance, infraestrutura de TI e
                    análise de dados. Rápida aprendizagem e comprometida em
                    desenvolver soluções de qualidade. Voluntária no movimento
                    escoteiro, fomentando trabalho em equipe e liderança.
                    Proficiente em várias linguagens de programação e
                    tecnologias modernas, estou entusiasmada em aplicar meus
                    conhecimentos para contribuir com soluções inovadoras e
                    impactantes.
                </Paragraph>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SectionTitle>Habilidades Principais</SectionTitle>
                <SkillsGrid>
                    <SkillCategory>
                        <SkillCategoryTitle>Desenvolvimento</SkillCategoryTitle>
                        <SkillList>
                            <li>React</li>
                            <li>JavaScript ES6+</li>
                            <li>HTML e CSS</li>
                            <li>TypeScript</li>
                        </SkillList>
                    </SkillCategory>
                    <SkillCategory>
                        <SkillCategoryTitle>Banco de Dados</SkillCategoryTitle>
                        <SkillList>
                            <li>SQL</li>
                            <li>Modelagem de dados</li>
                            <li>Database management</li>
                        </SkillList>
                    </SkillCategory>
                    <SkillCategory>
                        <SkillCategoryTitle>Ferramentas Microsoft</SkillCategoryTitle>
                        <SkillList>
                            <li>Power BI</li>
                            <li>Power Apps</li>
                            <li>Análise de dados</li>
                        </SkillList>
                    </SkillCategory>
                    <SkillCategory>
                        <SkillCategoryTitle>Qualidade & Testes</SkillCategoryTitle>
                        <SkillList>
                            <li>Quality Assurance</li>
                            <li>Testes de Software</li>
                            <li>Conformidade</li>
                        </SkillList>
                    </SkillCategory>
                </SkillsGrid>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <SectionTitle>Experiência Profissional</SectionTitle>

                <ExperienceItem>
                    <JobTitle>Analista de Qualidade (QA)</JobTitle>
                    <Company>Azul Linhas Aéreas Brasileiras</Company>
                    <Period>Dezembro/2024 - Momento Atual</Period>
                    <JobDescription>
                        Iniciada recentemente na indústria aeronáutica como
                        Analista de Qualidade, utilizando Microsoft Power Apps
                        e Power BI para análise de dados e geração de relatórios.
                        Colaboração com equipes multifuncionais para garantir
                        conformidade e melhoria contínua nos padrões de
                        qualidade. Experiência em testes de software e validação
                        de processos críticos.
                    </JobDescription>
                </ExperienceItem>

                <ExperienceItem>
                    <JobTitle>Técnico de Suporte em TI</JobTitle>
                    <Company>Colégio Madre Iva</Company>
                    <Period>Março/2024 - Novembro/2024</Period>
                    <JobDescription>
                        Atuei como Especialista em Suporte de TI, acumulando
                        experiência em infraestrutura, redes, hardware, banco de
                        dados e Google Workspace. Responsabilidades incluíram
                        manutenção de servidores e sistemas operacionais,
                        garantindo alta disponibilidade e desempenho. Configuração
                        e gestão de redes corporativas, resolução de problemas de
                        conectividade e segurança. Diagnóstico e reparo de
                        equipamentos de hardware. Administração de banco de dados,
                        gerenciamento de backups e otimização de desempenho.
                        Implementação e suporte de ferramentas Google Workspace
                        para facilitação de colaboração e produtividade entre
                        equipes. Colaboração efetiva com times multidisciplinares,
                        participando de projetos de TI e sessões de treinamento
                        interno.
                    </JobDescription>
                </ExperienceItem>

                <ExperienceItem>
                    <JobTitle>Jovem Aprendiz em Tecnologia da Informação</JobTitle>
                    <Company>Colégio Madre Iva</Company>
                    <Period>Novembro/2022 - Fevereiro/2024</Period>
                    <JobDescription>
                        Navegando pela interseção entre servidores, sistemas de
                        informação e hardware, desenvolvendo expertise em
                        otimização de infraestrutura de TI. Trabalho colaborativo
                        como membro ativo de equipe, fomentando sinergia
                        tecnológica contínua e resolução de desafios
                        operacionais.
                    </JobDescription>
                </ExperienceItem>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <SectionTitle>Idiomas</SectionTitle>
                <SkillsGrid>
                    <SkillCategory>
                        <SkillCategoryTitle>Proficiência Linguística</SkillCategoryTitle>
                        <SkillList>
                            <li>Português (Native or Bilingual)</li>
                            <li>English (Professional Working)</li>
                            <li>Español (Elementary)</li>
                        </SkillList>
                    </SkillCategory>
                </SkillsGrid>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <SectionTitle>Formação</SectionTitle>

                <EducationItem>
                    <DegreeTitle>Desenvolvimento de Software</DegreeTitle>
                    <Institution>Fatec - Faculdade de Tecnologia</Institution>
                    <EducationPeriod>Agosto/2023 - Julho/2026</EducationPeriod>
                    <EducationDescription>
                        Graduação em Desenvolvimento de Software com ênfase em
                        tecnologias modernas, engenharia de software e práticas
                        de qualidade. Formação prática com projetos acadêmicos
                        envolvendo desenvolvimento web e análise de dados.
                    </EducationDescription>
                </EducationItem>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <SectionTitle>Certificações</SectionTitle>

                <SkillsGrid>
                    <SkillCategory>
                        <SkillCategoryTitle>Conhecimentos Certificados</SkillCategoryTitle>
                        <SkillList>
                            <li>Database SQL</li>
                            <li>CSS3</li>
                            <li>JavaScript ES6+</li>
                            <li>HTML e CSS</li>
                            <li>React</li>
                        </SkillList>
                    </SkillCategory>
                </SkillsGrid>
            </Section>

            <Section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <SectionTitle>Contato</SectionTitle>
                <ContactInfo>                    
                    <ButtonGroup>
                        <Button
                            href='https://www.linkedin.com/in/giovanna-faria-italiani-a36937244/?locale=pt'
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            💼 LinkedIn
                        </Button>
                        <Button
                            href='https://github.com/Giovanna-Italiani'
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
