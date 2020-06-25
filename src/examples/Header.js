import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query firstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
const Header = () => {
  const {
    site: {
      info,

      //   :{
      //     title,
      //     person: { name },
      //   },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>title: {data.site.siteMetadata.title}</h2>
      <h2>title: {data.site.siteMetadata.person.name}</h2> */}
      {/* <h2>title: {title}</h2>
      <h2>title: {name}</h2> */}
      <h2>title: {info.title}</h2>
      <h2>title: {info.person.name}</h2>
    </div>
  )
}

export default Header
