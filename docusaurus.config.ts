import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ReadyM Docs',
  tagline: 'Build multiplayer experiences in your favourite games',
  favicon: 'img/favicon.ico',

  markdown: {
    format: 'detect'
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: true
  },

  // Set the production url of your site here
  url: 'https://docs.ready.mp',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ReadyCode', // Usually your GitHub org/user name.
  projectName: 'ReadyMp', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
        translate: false
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
        calendar: 'gregory',
        path: 'zh-Hans',
        translate: true
      },

    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebarsWukong.ts',
          path: 'wukong-mp',
          routeBasePath: 'wukong-mp',
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.4.0'
            },
            '0.3.1': {
              label: '0.3.1',
            },
            '0.2.4': {
              label: '0.2.4',
            },
            '0.1.0': {
              label: '0.1.0',
            }
          },
        },
        blog: {
          blogTitle: 'ReadyM Release Notes',
          blogDescription: 'Read about the latest updates and improvements in ReadyM multiplayer SDKs.',
          routeBasePath: 'releases',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/custom.css'
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo-dark.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Dev Portal',
      logo: {
        alt: 'ReadyM Logo',
        src: 'img/logo-dark.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'oblivionMpDocsSidebar',
          position: 'left',
          label: 'OblivionMP',
          docsPluginId: 'oblivion'
        },
        {
          type: 'docSidebar',
          sidebarId: 'oblivionMpApiSidebar',
          position: 'left',
          label: 'OblivionMP API',
          docsPluginId: 'oblivion'
        },
        {
          type: 'docSidebar',
          sidebarId: 'wukongMpDocsSidebar',
          position: 'left',
          label: 'WukongMP',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wukongMpApiSidebar',
          position: 'left',
          label: 'WukongMP API',
        },
        {
          to: 'releases',
          label: 'Releases',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          versions: {
            'current': { label: '0.2.0' },
            '0.1.1': { label: '0.1.1' },
          },
          position: 'right',
          docsPluginId: 'oblivion',
        },
        {
          type: 'docsVersionDropdown',
          versions: {
            'current': { label: '0.4.0' },
            '0.3.1': { label: '0.3.1' },
            '0.2.4': { label: '0.2.4' },
            '0.1.0': { label: '0.1.0' },
          },
          position: 'right',
          docsPluginId: 'default',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/readycodeio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'OblivionMP SDK',
              to: '/oblivion-mp/docs/what-is-oblivion-mp',
            },
            {
              label: 'WukongMP SDK',
              to: '/wukong-mp/docs/what-is-wukong-mp',
            },
            {
              label: 'ReadyM FAQ',
              href: 'https://www.ready.mp/faq',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WukongMP Discord',
              href: 'https://discord.gg/wukongmp',
            },
            {
              label: 'OblivionMP Discord',
              href: 'https://discord.gg/obmp',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@readymultiplayer',
            },
            {
              label: 'BiliBili',
              href: 'https://space.bilibili.com/3546825837513480',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@ready.mp',
            },
            {
              label: 'X',
              href: 'https://x.com/readymod',
            },
            {
              label: 'QQ',
              href: 'https://pd.qq.com/g/pd30575984',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Player Portal',
              href: 'https://portal.ready.mp',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/readycodeio',
            },
            {
              label: 'WukongMP',
              href: 'https://wukong.mp',
            },
            {
              label: 'OblivionMP',
              href: 'https://oblivion.mp',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ReadyCode Ltd (ReadyM team)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'oblivion',
        path: 'oblivion-mp',
        routeBasePath: 'oblivion-mp',
        sidebarPath: './sidebarsOblivion.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: '0.2.0',
            badge: true
          },
          '0.1.1': {
            label: '0.1.1',
          }
        },
      },
    ],
  ],
};

export default config;
