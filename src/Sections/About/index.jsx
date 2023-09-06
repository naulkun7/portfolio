import styles from "./styles.module.css"
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import constant from "../../constant.json"

function About() {
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
    <section className={styles.about} id="about">
      <Container className={styles.container}>
        <h2 className={styles.heading}>STORY AND ME </h2>
        <Row>
          <Col xs={12}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              className={styles.about_slider}
            >
              {constant.about.map((about, index) => (
                <div key={index} className={styles.item}>
                  <p className={styles.about_text}>{about.story}</p>
                  <div className={styles.img_background}>
                    <div className={styles.img_background_container}>
                      <img className={styles.img} src={about.imgUrl} alt="" />
                    </div>
                  </div>
                  <h5>{about.desc}</h5>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
