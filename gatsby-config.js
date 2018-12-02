module.exports = {
  siteMetadata: {
    title : 'Gatsby Test',
    description : 'This is a test of GraphQL',
    keywords : 'keywords',
  },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'ueex15e5tu6n',
                accessToken: '94048cc7315345c82875846052f01f1cbf976cc0b56da64aac44644a5c9d2d1b'
            }
        }
    ],

}
