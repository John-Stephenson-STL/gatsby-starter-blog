import React from 'react'
import { Link } from 'gatsby'
import Layout from './components/layout'

const ContactPage = () => {
   return (
      <Layout>
         <h1>This is the Contact Page!</h1>
         <p>Contact information will show here.</p>
         <p>For LinkedIn: <a href="https://www.linkedin.com/in/stephensonjohn" target="_blank">LinkedIn</a></p>
         <p>For Twitter: <a href="https://twitter.com/JStephenson1710" target="_blank">Twitter</a></p>
      </Layout>
   )
}

export default ContactPage