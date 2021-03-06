module.exports = {
  siteMetadata: {
    title: `Celloworld`,
    name: `Celloworld`,
    siteUrl: `https://www.alfieqashwa.me`,
    description: `Alfie Qashwa Personal Site to Learn & Share Knowledges.`,
    hero: {
      heading: `Cello, World!`,

      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/alfieqashwa`
      },
      {
        name: `github`,
        url: `https://github.com/alfieqashwa`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/alfieqashwa`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          contentful: false
        }
      }
    },
    'gatsby-theme-waves',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alfie Qashwa`,
        short_name: `Celloworld`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
