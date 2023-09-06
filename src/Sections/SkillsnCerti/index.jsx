import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import constant from "../../constant.json"

// Icons
import ReactIcon from "./icons/react.jsx"
import HTMLIcon from "./icons/html.jsx"
import CSSIcon from "./icons/css3.jsx"
import JSIcon from "./icons/js.jsx"

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <section className={styles.skill} id="skills">
      <Container className={styles.container}>
        <Row>
          <Col className={styles.col}>
            <div className={styles.skill_bx}>
              <h2>SKILLS AND CERTIFICATE</h2>
              <Row className={styles.certiList}>
                {constant.certificate.map((certificate, index) => {
                  return (
                    <Col key={index} xs={6} md={3}>
                      <div className={styles.certiItem}>
                        <a href={certificate.link} target="_blank">
                          {certificate.title}
                        </a>
                        <p>
                          Issued: {certificate.date}
                          <br />
                          {certificate.author}
                        </p>
                        <img
                          src={certificate.logo}
                          className={styles.certiLogo}
                          alt={certificate.author}
                        />
                      </div>
                    </Col>
                  )
                })}
              </Row>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className={styles.skill_slider}
                removeArrowOnDeviceType={[
                  "desktop",
                  "superLargeDesktop",
                  "tablet",
                  "mobile",
                ]}
              >
                <div className={styles.item}>
                  <HTMLIcon />
                  <h5>HTML</h5>
                </div>
                <div className={styles.item}>
                  <CSSIcon />
                  <h5>CSS</h5>
                </div>
                <div className={styles.item}>
                  <JSIcon />
                  <h5>JS</h5>
                </div>
                <div className={styles.item}>
                  <ReactIcon />
                  <h5>React JS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
