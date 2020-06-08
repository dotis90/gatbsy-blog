import React from "react"
import Layout from "../components/layout"
import About from "../components/about/about"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
