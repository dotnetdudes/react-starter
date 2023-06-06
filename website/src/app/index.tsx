/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { HomePage } from './pages/HomePage/Loadable';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from 'app/components/Header';

import { useTranslation } from 'react-i18next';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const Main = styled('main')(({ theme }) => ({
  minHeight: '440px',
  flexGrow: 2,
  position: 'relative',
  display: 'flex',
}));

export function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <Helmet
        titleTemplate="%s | React Starter"
        defaultTitle="Dotnetdudes | React Starter"
        htmlAttributes={{ lang: i18n.language || 'en' }}
      >
        <meta name="description" content="Dotnetdudes React Starter Kit" />
      </Helmet>
      <CssBaseline />
      <BrowserRouter>
        <Root>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Main>
          <Footer />
        </Root>
      </BrowserRouter>
    </>
  );
}
