/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // 默认情况下，Docusaurus会根据文档文件夹的结构自动生成侧边栏
  // 但你也可以手动创建一个侧边栏

  tutorialSidebar: [
    {
      type: 'category',
      label: '一代辅助健身机器人', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'fitness_robot1/skill1',
        'fitness_robot1/skill2',
        'fitness_robot1/skill3',
        'fitness_robot1/skill4',
      ],
    },
    {
      type: 'category',
      label: '待开发产品', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'fitness_robot2/skill1',
      ],
    },
  ],

  application: [
    {
      type: 'category',
      label: '健身领域', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'real_application1/app1',
        'real_application1/app2',
        'real_application1/app3',

      ],
    },
  ],

  about: [
    {
      type: 'category',
      label: '关于AXTech', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'about/about1',
        'about/about2',
        'about/about3',
      ],
    },
  ],

  service : [
  {
    type: 'category',
    label: '资源下载', // 侧边栏中的分类标题，将显示为一个标题
    items: [
      'source/about1',
      'source/about2',
      'source/about3',

    ],
  },
  {
    type: 'category',
    label: '条款与政策', // 侧边栏中的分类标题，将显示为一个标题
    items: [
      'service/about1',
      'service/about2',
      'service/about3',
    ],
  },
    {
      type: 'category',
      label: '新闻中心', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'news/about1',
        'news/about2',
        'news/about3',
      ],
    },
],


};

module.exports = sidebars;
