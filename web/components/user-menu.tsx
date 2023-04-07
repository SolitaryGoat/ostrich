import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const UserMenu = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  if (!session) {
    return <Link href="/api/auth/signin">{t('Submit a report')}</Link>;
  }

  return (
    <p>
      {session?.user?.name}
      &nbsp;
      <Button size="sm" onClick={() => signOut()} variant="light">
        {t('Sign out')}
      </Button>
    </p>
  );
};

export default UserMenu;
