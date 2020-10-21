/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-ipfs-web-wallet',
    // require.resolve('../gatsby-plugin-bch-split')
    'gatsby-plugin-bch-split'
  ]
}
