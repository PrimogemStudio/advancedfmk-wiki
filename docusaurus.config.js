// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Advanced Framework',
  tagline: 'Minecraft 的模块化框架',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://primogemstudio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/advancedfmk-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'primogemstudio', // Usually your GitHub org/user name.
  projectName: 'advancedfmk-wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Advanced Framework',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '主文档',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            type: 'localeDropdown',
          }
        ],
      },
      footer: {
        links: [
          {
            title: '所有文档',
            items: [
              {
                label: '主文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/PrimogemStudio/Advanced-Framework',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/mod/advanced-framework',
              },
              {
                label: 'MC 百科',
                href: 'https://www.mcmod.cn/class/13935.html',
              },
            ],
          },
          /*{
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PrimogemStudio, Inc. 使用 Docusaurus 构建`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
