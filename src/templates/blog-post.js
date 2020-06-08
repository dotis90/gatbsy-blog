import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Layout>
        <Head title={post.frontmatter.title} />
        <div className="singlePost">
          <div className="postHeading">
            <h1 className="postTitle">{post.frontmatter.title}</h1>
            <span className="postDetails">Posted by {post.frontmatter.author} || {post.frontmatter.date}</span>
          </div>
          <div className="postText" dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link className="goBack" to="/">Go Back</Link>
        </div>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
