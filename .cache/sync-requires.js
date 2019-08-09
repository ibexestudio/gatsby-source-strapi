const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("/home/calpinques/cms/gatsby-source-strapi/src/templates/article.js"))),
  "component---src-templates-author-js": hot(preferDefault(require("/home/calpinques/cms/gatsby-source-strapi/src/templates/author.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/calpinques/cms/gatsby-source-strapi/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/calpinques/cms/gatsby-source-strapi/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/calpinques/cms/gatsby-source-strapi/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/calpinques/cms/gatsby-source-strapi/src/pages/page-2.js")))
}

