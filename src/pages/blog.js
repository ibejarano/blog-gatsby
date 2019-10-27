import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
        edges {
          node {
            title
            slug
            publishedDate (
              formatString: "MMMM Do, YYYY"
            )
          }
        }
      }
    }
    `)

    const BlogTitles = data.allContentfulBlogPost.edges.map( (post) => {
        return(
            <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`} >
            <h2>{post.node.title}</h2>
            </Link>
            <p>{post.node.publishedDate}</p>
            </li>
        )
    })

    return(
        <Layout>
        <h1>Blog</h1>
        <ol className={blogStyles.posts} >{BlogTitles}</ol>
        </Layout>
    )
}

export default BlogPage;