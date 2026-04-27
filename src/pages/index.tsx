import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {translate({id: 'readym.readym-docs'})}
        </Heading>
        <p className="hero__subtitle">{translate({id: 'readym.tagline'})}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/wukong-mp/docs/what-is-wukong-mp">
            {translate({id: 'readym.sdk-documentation'})}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`${translate({id: 'readym.readym-docs'})}`}
      description={translate({id: 'readym.tagline'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
