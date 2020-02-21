module.exports = {
  siteMetadata: {
    name: `gatsby-theme-terminal`,
    description: `A Gatsby theme that looks like a terminal!`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-theme`],
    siteURL: `https://gatsby-theme-terminal.netlify.com`,
    siteImage: `images/terminal-open-graph-image.jpg`,
    lang: `eng`,
    config: {
      sidebarWidth: 220,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        // source: "posts",
        source: [`posts`, `projects`],
      },
    },
  ],
}