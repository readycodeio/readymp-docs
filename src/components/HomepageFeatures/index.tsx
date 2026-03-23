import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unified play - single account',
    description: (
      <>
        Integrate with your favorite gaming platforms securely and manage your gaming identity in one place.
      </>
    ),
  },
  {
    title: 'Gateway to the ReadyM world',
    description: (
      <>
        In a few simple steps, start your own dedicated custom co-op or PvP game directly from our launcher, then play with friends.
      </>
    ),
  },
  {
    title: 'Custom game modes',
    description: (
      <>
        Shipping SDK that allows server owners to create and customize game modes, scripts, and rulesets.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
