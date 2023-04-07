import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <p className="text-end">
        {t('Do you know a community that applies censorship or spreads fake news?')}
        &nbsp;
        <Button variant="success">
          {t('Submit a report')}
        </Button>
      </p>
    </div>
  );
};

export default Index;
