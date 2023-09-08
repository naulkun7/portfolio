import { Col } from "react-bootstrap"
import styles from "./styles.module.css"
import React from "react"
// import img from "./img/renderImg"

function ProjectCard({
  title,
  description,
  imgUrl,
  skill,
  githubUrl,
  linkUrl,
}) {
  return (
    <Col sm={6} md={4}>
      <div className={styles.proj_imgbx}>
        <img src={imgUrl} />
        <div className={styles.proj_txtx}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{skill}</p>
          <div className={styles.link}>
            <a href={githubUrl} target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href={linkUrl} target="_blank">
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
