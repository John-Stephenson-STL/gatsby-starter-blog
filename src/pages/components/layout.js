import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutSytles from  './layout.module.scss'

const Layout = (props) => {
   return (
      <div className={layoutSytles.container}>
         <div className={layoutSytles.content}>
            <Header />
            {props.children}
         </div>
         <Footer />
      </div>
   )
}

export default Layout