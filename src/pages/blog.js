import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
              fields {
                  slug
              }
            }
          }
        }
      }
    `)

    const BlogTitles = data.allMarkdownRemark.edges.map( (post) => {
        return(
            <li>
            <Link to={`/blog/${post.node.fields.slug}`} >
            <h2>{post.node.frontmatter.title}</h2>
            </Link>
            <p>{post.node.frontmatter.date}</p>
            </li>
        )
    })

    return(
        <Layout>
        <h1>Blog</h1>
        <ol>{BlogTitles}</ol>
        </Layout>
    )
}

export default BlogPage;