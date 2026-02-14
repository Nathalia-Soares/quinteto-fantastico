import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { IntegranteRouter } from './pages/Integrante';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/integrante/:slug" element={<IntegranteRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
