import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface Props {
  children: ReactElement;
}

const languages = [
  {
    locale: 'en-US',
    name: 'English',
    flag: '🇬🇧',
  },
  {
    locale: 'it-IT',
    name: 'Italiano',
    flag: '🇮🇹',
  },
];

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const { t } = useTranslation();

  return (
    <Container>
      <p className="text-end">
        {languages.map(({ flag, locale, name }) => (
          <Link
            href={asPath}
            locale={locale}
            title={name}
            className="text-decoration-none m-1 fs-5"
          >
            {flag}
          </Link>
        ))}
      </p>
      <h1 className="display-4">FreeSpeechMeter.com</h1>
      <p className="fs-3">{t('How free is your community?')}</p>
      <hr />
      {children}
    </Container>
  );
};

export default Layout;
