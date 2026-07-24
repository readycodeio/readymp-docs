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
            🐒{' '}
            {translate({
              id: 'readym.hero.wukong',
              message: 'WukongMP Docs',
              description: 'Hero CTA button linking to WukongMP documentation',
            })}
          </Link>
          <Link
            className={clsx('button button--outline button--secondary button--lg', styles.buttonOutline)}
            to="/oblivion-mp/docs/what-is-oblivion-mp">
            ⚔️{' '}
            {translate({
              id: 'readym.hero.oblivion',
              message: 'OblivionMP Docs',
              description: 'Hero CTA button linking to OblivionMP documentation',
            })}
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
    icon: '🐒',
    title: translate({
      id: 'readym.game.wukong.title',
      message: 'WukongMP',
    }),
    description: translate({
      id: 'readym.game.wukong.description',
      message:
        'Community multiplayer for Black Myth: Wukong. Host a server and build custom game modes with the C# SDK.',
    }),
    cta: translate({
      id: 'readym.game.wukong.cta',
      message: 'WukongMP Docs →',
    }),
    href: '/wukong-mp/docs/what-is-wukong-mp',
  },
  {
    icon: '⚔️',
    title: translate({
      id: 'readym.game.oblivion.title',
      message: 'OblivionMP',
    }),
    description: translate({
      id: 'readym.game.oblivion.description',
      message:
        'Community multiplayer for The Elder Scrolls IV: Oblivion Remastered. Host a server and build custom game modes with the C# SDK.',
    }),
    cta: translate({
      id: 'readym.game.oblivion.cta',
      message: 'OblivionMP Docs →',
    }),
    href: '/oblivion-mp/docs/what-is-oblivion-mp',
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
