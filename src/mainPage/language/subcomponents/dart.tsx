import { useTranslation } from 'react-i18next';

function Dart() {
  const { t } = useTranslation();

  return (
    <div>
      {t('DartTextTop')}

      <div>
        <ul>
          <li>
            <strong>Framework:</strong>
            {' '}
            Flutter
          </li>
          <li>
            <strong>State Management:</strong>
            Redux
          </li>
          <li>
            <strong>Navigation:</strong>
            {' '}
            Flutter Navigator
          </li>
          <li>
            <strong>UI Design:</strong>
            {' '}
            Custom Widgets, Material Design, Cupertino Widgets
          </li>
          <li>
            <strong>Testing:</strong>
            {' '}
            Flutter Test, Mockito, Integration Testing
          </li>
        </ul>
      </div>
      {t('DartTextBottom')}
      {' '}
    </div>
  );
}

export default Dart;
