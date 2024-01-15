// const path = require('path')
// exports.createPages = async ({ graphql, actions, reporter }) => {
//    const { createPage } = actions
//    // Define a template for blog post
//    const blogPost = path.resolve('./src/templates/blog-post.js')
//    const categoryPost = path.resolve('./src/templates/filter-post.js')
//    const result = await graphql(`
//       {
//          allContentfulImage {
//             nodes {
//                slug
//                albumCategory
//             }
//          }
//       }
//    `)
//    if (result.errors) {
//       reporter.panicOnBuild(
//          `There was an error loading your Contentful posts`,
//          result.errors
//       )
//       return
//    }
//    const posts = result.data.allContentfulImage.nodes
//    console.log('hej')
//    if (posts.length > 0) {
//       posts.forEach((post) => {
//          createPage({
//             path: `/archive/${post.slug}/`,
//             component: blogPost,
//             context: {
//                slug: post.slug,
//             },
//          })
//       })
//    }
// }

const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
   const { createPage } = actions
   // Define a template for blog post
   const blogPost = path.resolve('./src/templates/blog-post.js')
   const categoryPost = path.resolve('./src/templates/filter-post.js')
   const result = await graphql(`
      {
         allContentfulImage {
            nodes {
               slug
               albumCategory
            }
         }
      }
   `)
   if (result.errors) {
      reporter.panicOnBuild(
         `There was an error loading your Contentful posts`,
         result.errors
      )
      return
   }
   const posts = result.data.allContentfulImage.nodes
   if (posts.length > 0) {
      posts.forEach((post) => {
         createPage({
            path: `/archive/${post.slug}/`,
            component: blogPost,
            context: {
               slug: post.slug,
               image: true,
            },
         })
      })
   }
   const filter = result.data.allContentfulImage.nodes
   if (filter.length > 0) {
      filter.forEach((post) => {
         createPage({
            path: `/${post.albumCategory}/`,
            component: categoryPost,
            context: {
               slug: post.slug,
               albumCategory: post.albumCategory,
            },
         })
      })
   }
}
