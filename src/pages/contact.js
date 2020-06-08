import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact/contact"
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
