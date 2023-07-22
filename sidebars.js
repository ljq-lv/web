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
      label: 'fitness robot V1', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'fitness_robot1/skill1',
        'fitness_robot1/skill2',
        'fitness_robot1/skill3',
      ],
    },
    {
      type: 'category',
      label: 'fitness robot V2', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'fitness_robot2/skill1',
        'fitness_robot2/skill2',
      ],
    },
  ],

  application: [
    {
      type: 'category',
      label: 'real application', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'real_application1/app1',
      ],
    },
  ],

  service: [
    {
      type: 'category',
      label: 'service', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'service_and_support/download',
        'service_and_support/service',
      ],
    },
  ],

  app_download: [
    {
      type: 'category',
      label: 'real application', // 侧边栏中的分类标题，将显示为一个标题
      items: [
        'app_download/download1',
      ],
    },
  ],

};

module.exports = sidebars;
