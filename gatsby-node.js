const path = require("path")
// const fs = require("fs");
//
// // Create pages from markdown files.
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//
//   return Promise.all(
//     ["blog", "team"].map(async item => {
//       const result = await graphql(
//         `
//         query {
//           ${item}: allMarkdownRemark(
//             filter: { fileAbsolutePath: { regex: "/${item}/" } }
//             sort: { fields: [frontmatter___date], order: DESC }
//           ) {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   path
//                   title
//                   date(formatString: "DD MMMM YYYY")
//                 }
//                 excerpt
//               }
//             }
//           }
//         }
//       `
//       );
//       return Promise.all(
//         result.data[item].edges.map(({ node }) => {
//           const component = fs.existsSync(`src/templates/${item}.js`)
//             ? // Use specific template for item, e.g., index.js, if it exists.
//             path.resolve(`src/templates/${item}.js`)
//             : // Or use general template.
//             path.resolve(`src/templates/general.js`);
//           return createPage({
//             component,
//             path: node.frontmatter.path,
//             context: { id: node.id },
//           });
//         })
//       );
//     })
//   );
// };
//

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      posts: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      
      posts: allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            excerpt {
              excerpt
            }
            featuredImage {
              fluid {
                src
              }
            }
            tags
          }
        }
      }
    }
  `);

  data.posts.edges.forEach(({node}) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.slug
      }
    });
  })
}