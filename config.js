'use strict';

const year = new Date().getFullYear();

module.exports = {
  url: 'https://tsubame3.me',
  pathPrefix: '/',
  title: 'つばめさんのブログ',
  subtitle: '情報系大学院生のブログ',
  copyright: `© ${year} つばめさん.`,
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    // },
    // {
    //   label: 'About me',
    //   path: '/pages/about'
    // },
    // {
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    }
  ],
  author: {
    name: 'つばめさん',
    photo: '/logo.png',
    bio: '情報系の大学院生です！技術系のことや日常のことを記事にしていこうと思います！',
    contacts: {
      email: '',
      facebook: '',
      telegram: '',
      twitter: 'is_tsubame',
      github: 'swallowms',
      rss: '',
      vkontakte: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  }
};
