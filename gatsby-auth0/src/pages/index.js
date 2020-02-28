import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <p>Hello Gatsby!</p>
    <Link to="/account">Go to your account</Link>
  </Layout>
)