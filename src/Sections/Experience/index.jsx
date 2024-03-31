import { useState } from "react";
import constant from "../../constant.json";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styles from "./styles.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.experience} id="experience">
      <Container>
        <h2 className={styles.mainTitle}>EXPERIENCE</h2>
        <Row className={styles.outer}>
          <Col xs={12} md={4}>
            {constant.experiences.map((experience, index) => (
              <button
                key={index}
                className={
                  index === currentIndex
                    ? `${styles.tab} ${styles.active_tab}`
                    : `${styles.tab}`
                }
                onClick={() => setCurrentIndex(index)}
                tabIndex={0}
              >
                {experience.company}
              </button>
            ))}
          </Col>
          <Col xs={12} md={8}>
            <h1 className={styles.title}>
              {constant.experiences[currentIndex].title}{" "}
              <a
                className={styles.link}
                href={constant.experiences[currentIndex].link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Company's website"
              >
                @ {constant.experiences[currentIndex].company}
              </a>
            </h1>
            <p className={styles.duration}>
              {constant.experiences[currentIndex].duration}
            </p>
            {constant.experiences[currentIndex].desc.map((point, index) => (
              <p key={index} className={styles.desc}>
                <PlayArrowIcon /> {point}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
