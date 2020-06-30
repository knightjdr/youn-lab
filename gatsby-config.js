module.exports = {
  pathPrefix: '/youn-lab',
  siteMetadata: {
    author: 'Ji-Young Youn',
    description: 'We study how cells deal with stress using proteomics tools',
    siteUrl: 'https://knightjdr.github.io/youn-lab',
    title: 'Youn laboratory',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    primaryLinks: [
      'research',
      'publications',
      'contact',
    ],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [
      31626750,
      30364987,
      29907827,
      29510985,
      29395067,
      28716093,
      28188527,
      28122947,
      27811238,
      24062589,
      22282571,
      21492431,
      21076421,
      20610658,
      20610658,
    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'Google Scholar', link: 'https://scholar.google.ca/citations?user=8Qivd48AAAAJ&hl=en' },
      { text: 'Twitter', link: 'https://twitter.com/labyoun?lang=en' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/ji-young-youn-60051b103' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'youn-lab',
        short_name: 'youn-lab',
        start_url: '/',
        background_color: '#3d8183',
        theme_color: '#3d8183',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
