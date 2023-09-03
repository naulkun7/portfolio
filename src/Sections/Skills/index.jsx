import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className={styles.skill} id="skills">
      <Container>
        <Row>
          <Col className={styles.col}>
            <div className={styles.skill_bx}>
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem adipisci, fugit libero, quia vero non deserunt eum ipsum
                amet maiores voluptas quae dolorum quisquam porro, illum eveniet
                blanditiis laboriosam. Ratione?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={styles.skill_slider}
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
