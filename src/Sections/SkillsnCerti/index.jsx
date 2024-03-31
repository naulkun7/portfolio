import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import constant from "../../constant.json";

// Icons
import ReactIcon from "../../asset/icons/react.jsx";
import HTMLIcon from "../../asset/icons/html.jsx";
import CSSIcon from "../../asset/icons/css3.jsx";
import JSIcon from "../../asset/icons/js.jsx";
import NodeIcon from "../../asset/icons/nodejs.jsx";
import BootstrapIcon from "../../asset/icons/bootstrap.jsx";
import MongoDB from "../../asset/icons/mongodb.jsx";

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
  };

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
                    <Col key={index} xs={12} md={6}>
                      <div className={styles.certiItem}>
                        <h3>
                          <a
                            href={certificate.link}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {certificate.title}
                          </a>
                        </h3>
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
                  );
                })}
              </Row>
              <hr className={styles.center_star}></hr>
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
                  <h5>HTML5</h5>
                </div>
                <div className={styles.item}>
                  <CSSIcon />
                  <h5>CSS3</h5>
                </div>
                <div className={styles.item}>
                  <JSIcon />
                  <h5>Javascript</h5>
                </div>
                <div className={styles.item}>
                  <ReactIcon />
                  <h5>React JS</h5>
                </div>
                <div className={styles.item}>
                  <BootstrapIcon />
                  <h5>Bootstrap</h5>
                </div>
                <div className={styles.item}>
                  <NodeIcon />
                  <h5>Node JS</h5>
                </div>
                <div className={styles.item}>
                  <MongoDB />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
