import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '保护',
    Svg: require('@site/static/new_img/1_1.svg').default,
    description: (
      <>
        在您需要帮助的时候，提供及时的保护
      </>
    ),
  },
  {
    title: 'AI教练',
      Svg: require('@site/static/new_img/1_2.svg').default,
    description: (
      <>
          提供个性化的指导
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--20')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" style={{ width: '800px', height: '800px' }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
