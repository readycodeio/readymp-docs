import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ReadyM Docs',
  tagline: 'Develop multiplayer experiences in your favourite games',
  favicon: 'img/favicon.ico',

  markdown: {
    format: 'detect'
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.ready.mp',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ReadyCode', // Usually your GitHub org/user name.
  projectName: 'ReadyMp', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.ts'
        },
        blog: {
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
      title: 'Developer',
      logo: {
        alt: 'ReadyM Logo',
        src: 'img/logo-dark.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wukongMpDocsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wukongMpApiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/readycodeio/readymp-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
              label: 'WukongMP SDK',
              to: '/docs/wukongmp-docs/what-is-wukong-mp',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/wukongmp-readym-1278355057330618533',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@readymultiplayer',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/ready_multiplayer',
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ReadyCode, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
