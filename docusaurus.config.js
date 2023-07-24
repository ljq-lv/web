// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '海格力斯',
  tagline: '让所有人安全健身，享受私人AI教练',
  favicon: 'new_img/axt.ico', //小图标 用来 导航的小细节

  // Set the production url of your site here
  url: 'https://ljq-lv.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/web/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ljq-lv', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AXTech',
        logo: {
          alt: 'My Site Logo',
          src: 'new_img/axt.svg', //logo旁边的 公司demo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '机器人',
          },
          {
            type: 'docSidebar',
            sidebarId: 'application',
            position: 'left',
            label: '行业应用',
          },
          {
            type: 'docSidebar',
            sidebarId: 'about',
            position: 'left',
            label: '关于AXTech',
          },
          {
            type: 'docSidebar',
            sidebarId: 'service',
            position: 'left',
            label: '服务与支持',
          },
          {
            href: 'https://github.com/ljq-lv/web/tree/master',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '机器人',
            items: [
              {
                label: '产品1',
                to: '/docs/service_and_support/service',
              },
            ],
          },
          {
            title: '联系方式',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'youtube',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: '抖音',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '下载中心',
            items: [
              {
                label: '使用教程',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
