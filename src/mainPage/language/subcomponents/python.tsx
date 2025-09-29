import { useTranslation } from 'react-i18next';

function Python() {
  const { t } = useTranslation();

  return (
    <div>
      {t('PythonTextTop')}

      <div>
        <ul>
          <li>
            <strong>Data Manipulation & Analysis:</strong>
            {' '}
            Pandas, NumPy, SciPy,
            {' '}
          </li>
          <li>
            <strong>Machine Learning & Deep Learning:</strong>
            {' '}
            TensorFlow, Keras, Scikit-Learn, OpenCV
          </li>
          <li>
            <strong>Data Visualization:</strong>
            {' '}
            Matplotlib, Seaborn
          </li>
        </ul>
      </div>
      {t('PythonTextBottom')}
    </div>
  );
}

export default Python;
