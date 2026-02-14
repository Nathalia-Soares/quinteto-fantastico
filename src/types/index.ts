export interface TeamMember {
  id: string;
  slug: string;
  nome: string;
  cargo: string;
  foto: string;
  descricao: string;
  link?: string;
  linkLabel?: string;
}

export type ThemeMode = 'light' | 'dark';
