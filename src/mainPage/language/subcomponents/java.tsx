import { useTranslation } from 'react-i18next';

function Java() {
  const { t } = useTranslation();

  return (
    <div>
      {t('JavaTextTop')}

      <div>
        <ul>
          <li>
            <strong>Backend Development:</strong>
            {' '}
            Spring Boot, Spring MVC, Hibernate
          </li>
          <li>
            <strong>Testing & Automation:</strong>
            {' '}
            JUnit, Mockito, Cucumber
          </li>
        </ul>
      </div>
      {t('JavaTextBottom')}

    </div>
  );
}

export default Java;
