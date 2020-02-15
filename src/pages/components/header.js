import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
   // const data = useStaticQuery(graphql'
   //   quiery{
   //      site {
   //         siteMetaData {
   //            Title
   //         }
   //      }
   //   }
   // ')
   return (
      <header className={headerStyles.header}>
         <h1>
            <Link className={headerStyles.title} to="/">
               {JCompMan-STL Blog}
            </Link>
         </h1>
         <nav>
            <ul className={headerStyles.navList}>
               <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
               <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Page</Link></li>
               <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog Page</Link></li>
               <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact Page</Link></li>
               <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/docs">Docs Page</Link></li>
            </ul>
         </nav>
      </header>
   )
}

export default Header