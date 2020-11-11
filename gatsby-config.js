module.exports = {
  pathPrefix: "/prm-external-developer-website",
  siteMetadata: {
    title: "PRM Developer Website",
    description: "The developer website for all things PRM",
    author: "PRM @ NHSD",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
