import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blogpage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          repudiandae eum vel, tempora obcaecati exercitationem explicabo
          aliquid dolore maxime nulla, laudantium iste incidunt. Harum, animi.
        </p>
      </div>
    </Layout>
  )
}

export default blog
