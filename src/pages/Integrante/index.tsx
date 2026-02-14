import { Navigate, useParams } from 'react-router-dom';
import { EvertonDeFreitasSouzaPage } from './EvertonDeFreitasSouzaPage';
import { HenriqueAlmeidaMarquesPage } from './HenriqueAlmeidaMarquesPage';
import { GiovannaFariaItalianiPage } from './GiovannaFariaItalianiPage';
import { MoisesGoncalvesPage } from './MoisesGoncalvesPage';
import { NathaliaSoaresDeOliveiraPage } from './NathaliaSoaresDeOliveiraPage';

const slugToPage: Record<string, React.ComponentType> = {
  'everton-de-freitas-souza': EvertonDeFreitasSouzaPage,
  'henrique-almeida-marques': HenriqueAlmeidaMarquesPage,
  'giovanna-faria-italiani': GiovannaFariaItalianiPage,
  'moises-goncalves': MoisesGoncalvesPage,
  'nathalia-soares-de-oliveira': NathaliaSoaresDeOliveiraPage,
};

/**
 * Roteador que exibe a página do integrante conforme o slug na URL.
 * Cada integrante edita seu próprio arquivo de página em pages/Integrante/.
 */
export function IntegranteRouter() {
  const { slug } = useParams<{ slug: string }>();
  const Page = slug ? slugToPage[slug] : null;

  if (!slug || !Page) {
    return <Navigate to="/" replace />;
  }

  return <Page />;
}

export { EvertonDeFreitasSouzaPage } from './EvertonDeFreitasSouzaPage';
export { HenriqueAlmeidaMarquesPage } from './HenriqueAlmeidaMarquesPage';
export { GiovannaFariaItalianiPage } from './GiovannaFariaItalianiPage';
export { MoisesGoncalvesPage } from './MoisesGoncalvesPage';
export { NathaliaSoaresDeOliveiraPage } from './NathaliaSoaresDeOliveiraPage';
