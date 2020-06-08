import React from "react"
import { Link, graphql } from "gatsby"
import Hero from '../components/hero/hero'
import Layout from "../components/layout"
import Head from '../components/head'

const IndexPage = ({ data }) => (
  <Layout>
    <Head title="Home" />
    <Hero />
    <div className="postList">
      <h1 style={{ fontSize: '50px' }}>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div className="post" key={post.node.id}>
          <Link to={post.node.frontmatter.path}><h2>{post.node.frontmatter.title}</h2></Link>
          <p>{post.node.frontmatter.description}</p>
          <p>
            Posted by <strong>{post.node.frontmatter.author}</strong> on{" "}
            <strong>{post.node.frontmatter.date}</strong>
          </p>
          <div>
            <Link to={post.node.frontmatter.path}><button className="cta-btn">Read More</button></Link>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            author
            description
          }
        }
      }
    }
  }
`
export default IndexPage
