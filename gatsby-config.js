module.exports = {
  siteMetadata: {
    siteTitle: `Mimitsu`,
    defaultTitle: `Mimitsu | Documentation`,
    siteTitleShort: `Mimitsu`,
    siteDescription: `A focused RPG discord bot which brings a custom farm system and also, a lot of fun.`,
    siteUrl: `https://localhost:8000`,
    siteAuthor: `@Loliticos`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#c696e2`,
    basePath: `/`,
    footer: `Copyright © 2020 Loliticos. All rights Reserved`
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/mimitsubot/mimitsu-docs`,
        baseDir: `/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mimitsu`,
        short_name: `Mimitsu`,
        start_url: `/`,
        background_color: `#c696e2`,
        display: `standalone`,
        icon: `static/favicon.png`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://localhost:8000`
      }
    },
    `gatsby-plugin-offline`
  ]
};
