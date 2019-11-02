const path = require('path');

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                }
            }
        }
      }
    `);

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });

    const sectionTemplate = path.resolve('./src/templates/sections.js');

    const sections = ['web-development', 'opinion', 'health' , 'politics']

    sections.forEach((section) => {
        createPage({
            component: sectionTemplate,
            path: `/${section}`,
            context: {
                section: section
            }
        })
    })
};