import { useTranslation } from 'react-i18next';

function Ts() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        {t('TSTextTop')}
      </div>
      <div>
        I have extensive experience working with key frameworks and tools
        within the TypeScript ecosystem, including:
      </div>
      <div>
        <ul>
          <li>
            <strong>Frontend:</strong>
            {' '}
            Angular, Vue, React
          </li>
          <li>
            <strong>Backend:</strong>
            {' '}
            Node.js, Express
          </li>
          <li>
            <strong>Testing & Automation:</strong>
            {' '}
            Jest, Cypress
          </li>
        </ul>
        {t('TSTextBottom')}
      </div>
    </div>

  );
}

export default Ts;
