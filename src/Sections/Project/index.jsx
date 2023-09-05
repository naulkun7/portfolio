// import projImg1 from "./img/rps_prj.png"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import styles from "./styles.module.css"
import constant from "../../constant.json"
import ProjectCard from "./projectCard"

function Project() {
  return (
    <section className={styles.project} id="project">
      <Container className={styles.container}>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first">Page 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Page 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Page 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {constant.projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h4>Coming Soon</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h4>Coming Soon</h4>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Project
