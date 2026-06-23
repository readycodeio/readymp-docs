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
            to="/wukong-mp/docs/quick-start">
            🚀{' '}
            {translate({
              id: 'readym.host-a-server',
              message: 'Host a Server',
              description: 'Hero CTA button for server owners',
            })}
          </Link>
          <Link
            className={clsx('button button--outline button--secondary button--lg', styles.buttonOutline)}
            to="/wukong-mp/docs/what-is-wukong-mp">
            {translate({id: 'readym.sdk-documentation'})}
          </Link>
        </div>
      </div>
    </header>
  );
}

type PathItem = {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

const paths: PathItem[] = [
  {
    icon: '🖥️',
    title: translate({
      id: 'readym.path.server.title',
      message: 'Running a Server',
    }),
    description: translate({
      id: 'readym.path.server.description',
      message:
        'Get your WukongMP server up and running in minutes. Download the binary or use Docker, configure, and go live.',
    }),
    cta: translate({
      id: 'readym.path.server.cta',
      message: 'Quick Start Guide →',
    }),
    href: '/wukong-mp/docs/quick-start',
  },
  {
    icon: '⚡',
    title: translate({
      id: 'readym.path.sdk.title',
      message: 'Building Mods',
    }),
    description: translate({
      id: 'readym.path.sdk.description',
      message:
        'Extend WukongMP with our C#-based SDK. Build roleplaying servers, survival modes, custom arenas, or PvP tournaments with custom rulesets.',
    }),
    cta: translate({
      id: 'readym.path.sdk.cta',
      message: 'SDK Documentation →',
    }),
    href: '/wukong-mp/docs/Development/getting-started',
  },
];

function HomepagePaths(): ReactNode {
  return (
    <section className={styles.paths}>
      <div className="container">
        <p className={styles.pathsLabel}>
          {translate({
            id: 'readym.paths.label',
            message: 'What are you here for?',
          })}
        </p>
        <div className={styles.pathsGrid}>
          {paths.map(({icon, title, description, cta, href}) => (
            <Link key={href} to={href} className={styles.pathCard}>
              <div className={styles.pathIcon}>{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.pathCta}>{cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'readym.readym-docs'})}
      description={translate({id: 'readym.tagline'})}>
      <HomepageHeader />
      <HomepagePaths />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
