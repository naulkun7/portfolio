import styles from "./styles.module.css"
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import constant from "../../constant.json"

function About() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }
  return (
    <div className={styles.about} id="about">
      <Container className={styles.container}>
        <h2 className={styles.heading}>STORY AND ME </h2>
        <Row>
          <Col xs={12}>
            <p className={styles.about_text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              voluptate suscipit vero eaque recusandae reprehenderit qui
              dolorum, cumque ratione, non aspernatur commodi, perferendis
              itaque esse excepturi animi eos repellendus rerum! Ex quos
              corporis iusto enim eligendi harum neque, odio accusamus
              temporibus totam omnis itaque aut in reprehenderit ut aspernatur
              voluptatibus ea et nihil sit maxime tenetur aliquid laudantium.
              Rem, odit.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              className={styles.about_slider}
            >
              {constant.about.map((about, index) => (
                <div key={index} className={styles.item}>
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
    </div>
  )
}

export default About
