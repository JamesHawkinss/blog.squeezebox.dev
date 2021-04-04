module.exports = {
  title: "james' blog",
  description: "the most inactive site on the web",

  head: [
    // android
    ['meta', { name: 'theme-color', content: '#3767CE' }],

    // ios
    ['meta', { name: 'apple-mobile-web-app-title', content: "james' blog" }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    editLinkText: '',
    docsDir: '/posts',
    lastUpdated: false,
    nav: [
      { text: 'twitter', link: 'https://twitter.com/JamessHawkinsss' },
      { text: 'github', link: 'https://github.com/JamesHawkinss' },
      { text: 'contact', link: 'mailto:jhawki2005@gmail.com' }
    ],
    footer: 'james hawkins',
    sidebar: false,
    search: false,
    smoothScroll: true
  },

  plugins: [
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '/'
    }]
  ]
}
