import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import italianTranslation from '@/i18n/it.json';
import Layout from '@/components/layout';
import '@/styles/globals.css';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'it': {
        translation: italianTranslation,
      },
    },
  });

const localeLanguageMap = new Map([
  ['it-IT', 'it'],
  ['en-US', 'en'],
]);

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { locale, defaultLocale } = useRouter();
  const language = (
    localeLanguageMap.get(locale as string)
      || localeLanguageMap.get(defaultLocale as string)
  );
  i18n.changeLanguage(language);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
};

export default App;
