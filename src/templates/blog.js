import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
import BlogStyle from '../styles/blogBody';

// export const query = graphql`
//     query (
//         $slug: String!
//     ) {
//         markdownRemark (
//         fields: {
//             slug: {
//             eq: $slug
//             }
//         }
//         ) {
//         frontmatter {
//             title
//             date
//         }
//         html
//         }
//     }
// `


export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return(
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
           <BlogStyle>
           <h1>{props.data.contentfulBlogPost.title}</h1>
           <p className="post-date" >{props.data.contentfulBlogPost.publishedDate}</p>
           <div className="post-body" >
           {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
           </div>
           </BlogStyle>
        </Layout>
    );
}

export default Blog;