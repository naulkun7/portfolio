import projImg1 from "../../img/Project/rps_prj.png"
import styles from "./styles.module.css"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap"

function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor ",
      skill: "HTML, CSS, JS",
      imgUrl: projImg1,
      githubUrl: "#",
      linkUrl: "#",
    },
    {
      title: "Project 1",
      description: "Lorem ipsum dolor ",
      skill: "HTML, CSS, JS",
      imgUrl: projImg1,
      githubUrl: "#",
      linkUrl: "#",
    },
    {
      title: "Project 1",
      description: "Lorem ipsum dolor ",
      skill: "HTML, CSS, JS",
      imgUrl: projImg1,
      githubUrl: "#",
      linkUrl: "#",
    },
  ]

  return (
    <section className={styles.project} id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="tab-container-id" defaultActiveKey="tab-key">
              <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>{projects.map((project, index) => {})}</Row>
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
