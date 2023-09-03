import { Col } from "react-bootstrap"

function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj_imgbx">
        <img src={imgUrl} />
        <div className="proj_txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
