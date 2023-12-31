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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation',
        'configuration',
        'playground',
        'typescript-support',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Docusaurus Guides',
        description:
          "Let's learn about the most important Docusaurus concepts!",
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      items: [
        'guides/creating-pages',
        {
          type: 'category',
          label: 'Docs',
          link: {
            type: 'doc',
            id: 'guides/docs/introduction',
          },
          items: [
            'guides/docs/create-doc',
            {
              type: 'category',
              label: 'Sidebar',
              link: {
                type: 'doc',
                id: 'guides/docs/sidebar/index',
              },
              items: [
                'guides/docs/sidebar/items',
                'guides/docs/sidebar/autogenerated',
                'guides/docs/sidebar/multiple-sidebars',
              ],
            },
            'guides/docs/versioning',
            'guides/docs/multi-instance',
          ],
        },
        'blog',
        {
          type: 'category',
          label: 'Markdown Features',
          link: {
            type: 'doc',
            id: 'guides/markdown-features/introduction',
          },
          items: [
            'guides/markdown-features/react',
            'guides/markdown-features/tabs',
            'guides/markdown-features/code-blocks',
            'guides/markdown-features/admonitions',
            'guides/markdown-features/toc',
            'guides/markdown-features/assets',
            'guides/markdown-features/links',
            'guides/markdown-features/plugins',
            'guides/markdown-features/math-equations',
            'guides/markdown-features/diagrams',
            'guides/markdown-features/head-metadata',
          ],
        },
        'styling-layout',
        'swizzling',
        'static-assets',
        'search',
        'browser-support',
        'seo',
        'using-plugins',
        'deployment',
        'guides/whats-next',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      link: {type: 'doc', id: 'advanced/index'},
      items: [
        'advanced/architecture',
        'advanced/plugins',
        'advanced/routing',
        'advanced/ssg',
        'advanced/client',
      ],
    },
  ],
  process: [
    'cli',
    'docusaurus-core',
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
  api: [
    'cli',
    'docusaurus-core',
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],
};

module.exports = sidebars;
