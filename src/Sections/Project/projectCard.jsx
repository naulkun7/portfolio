import { Col } from "react-bootstrap"
import styles from "./styles.module.css"

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
      <div className="proj_imgbx">
        <img src={imgUrl} />
        <div className="proj_txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{skill}</p>
          <div className={styles.link}>
            <a href={githubUrl}>
              <i className="fab fa-github"></i>
            </a>
            <a href={linkUrl}>
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
