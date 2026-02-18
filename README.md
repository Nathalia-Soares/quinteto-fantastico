# 🌟 Quinteto Fantástico

Website colaborativo desenvolvido para apresentar o time de cinco engenheiros de software, suas experiências, habilidades e projetos.

## 📋 Sobre o Projeto

O Quinteto Fantástico é uma aplicação web moderna que serve como portfolio coletivo, apresentando perfis detalhados de cada integrante do time. O projeto foi desenvolvido com foco em design moderno, animações fluidas e experiência do usuário.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface clean com tema claro/escuro
- 🌌 **Background Animado**: Efeito de galáxia 3D interativo usando WebGL (OGL)
- 📱 **Totalmente Responsivo**: Adaptado para dispositivos móveis, tablets e desktop
- 🎭 **Animações Suaves**: Transições e animações usando Framer Motion
- 👤 **Perfis Individuais**: Página dedicada para cada membro com experiências, formação e contatos
- 🔄 **Navegação Intuitiva**: Sistema de rotas com React Router
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Styled Components** - Estilização CSS-in-JS
- **Framer Motion** - Biblioteca de animações
- **React Router DOM** - Gerenciamento de rotas
- **OGL** - Biblioteca WebGL para efeitos 3D
- **React Scripts** - Ferramentas de build e desenvolvimento

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/quinteto-fantastico.git
```

2. Entre no diretório do projeto:
```bash
cd quinteto-fantastico
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

5. Acesse no navegador:
```
http://localhost:3000
```

## 🚀 Scripts Disponíveis

- **`npm start`** - Inicia o servidor de desenvolvimento
- **`npm build`** - Cria a build de produção
- **`npm test`** - Executa os testes
- **`npm eject`** - Ejeta as configurações do Create React App (irreversível)

## 📁 Estrutura do Projeto

```
quinteto-fantastico/
├── public/              # Arquivos públicos (imagens, manifest, etc)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Footer/
│   │   ├── Galaxy/      # Efeito de galáxia 3D
│   │   ├── Hero/        # Seção hero com animação de texto
│   │   ├── Layout/
│   │   ├── Navbar/
│   │   ├── ScrollIndicator/
│   │   ├── TeamCard/
│   │   └── TeamSection/
│   ├── context/         # Context API (ThemeContext)
│   ├── data/            # Dados estáticos (teamMembers)
│   ├── pages/           # Páginas da aplicação
│   │   ├── HomePage/
│   │   └── Integrante/  # Páginas individuais dos membros
│   ├── styles/          # Estilos globais e tema
│   ├── types/           # Definições de tipos TypeScript
│   └── App.tsx          # Componente principal
└── package.json
```

## 👥 Integrantes

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="public/everton.png" width="150px" height="150px" style="border-radius: 50%; object-fit: cover;" alt="Everton de Freitas Souza"/><br>
        <b>Everton de Freitas Souza</b><br>
        <sub>Engenheiro de Software</sub>
      </td>
      <td align="center">
        <img src="public/henrique.png" width="150px" height="150px" style="border-radius: 50%; object-fit: cover;" alt="Henrique Almeida Marques"/><br>
        <b>Henrique Almeida Marques</b><br>
        <sub>Engenheiro de Software</sub>
      </td>
      <td align="center">
        <img src="public/giovanna.png" width="150px" height="150px" style="border-radius: 50%; object-fit: cover;" alt="Giovanna Faria Italiani"/><br>
        <b>Giovanna Faria Italiani</b><br>
        <sub>Engenheira de Software</sub>
      </td>
      <td align="center">
        <img src="public/moises.png" width="150px" height="150px" style="border-radius: 50%; object-fit: cover;" alt="Moisés Gonçalves"/><br>
        <b>Moisés Gonçalves</b><br>
        <sub>Engenheiro de Software</sub>
      </td>
      <td align="center">
        <img src="public/nathalia.png" width="150px" height="150px" style="border-radius: 50%; object-fit: cover;" alt="Nathália Soares de Oliveira"/><br>
        <b>Nathália Soares de Oliveira</b><br>
        <sub>Engenheira de Software</sub>
      </td>
    </tr>
  </table>
</div>

## 🎨 Características do Design

### Tema
- Suporte a tema claro e escuro
- Transições suaves entre temas
- Persistência de preferência do usuário

### Animações
- Entrada de elementos com fade e slide
- Hover com transformações 3D
- Indicador de scroll animado
- Efeito parallax sutil

### Responsividade
- Breakpoints para mobile, tablet e desktop
- Layout adaptativo
- Imagens otimizadas

## 🧪 Testes

O projeto utiliza React Testing Library e Jest para testes. Execute:

```bash
npm test
```

## 📝 Como Adicionar um Novo Membro

1. Adicione a foto do membro em `public/` (ex: `nome.png`)
2. Adicione os dados em `src/data/teamMembers.ts`
3. Crie a página individual em `src/pages/Integrante/NomePage.tsx`
4. Registre a rota em `src/pages/Integrante/index.tsx`

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é privado e destinado para fins acadêmicos/profissionais.

## 📞 Contato

Para mais informações sobre os integrantes, acesse o site e visualize os perfis individuais com links para LinkedIn, GitHub e email.

---

Desenvolvido com ❤️ pelo Quinteto Fantástico
