import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles.module.css";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Front End Developer",
    "Full Stack Developer",
    "Back End Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className={styles.home} id="home">
      <Container className={styles.container}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className={styles.home_content}>
            <span className={styles.tagline}>Welcome to my PORTFOLIO</span>
            <h1 className={styles.motionHeading}>
              {`I'm `}
              <span className={styles.wrap}>{text}</span>
            </h1>
            <p className={styles.info}>
              Hello, my name is <b>Nguyễn Hoàng Luân</b>, and you&apos;ve landed
              on my portfolio. Let me share some important details about myself.
              I&apos;m a last-year student, majoring in Information Technology
              at{""}
              <a
                href="https://hcmiu.edu.vn/en/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="International University"
              >
                <b> International University (VNU-HCMC)</b>
              </a>
              {""}. I&apos;m enthusiastic about taking on new challenges and
              expanding my knowledge. If you have any projects or ideas that
              align with
              <a href="#skills">
                <b>
                  <i> my skills</i>
                </b>
              </a>
              {""}, don&apos;t hesitate to reach out. I&apos;m eager to engage
              in conversations and explore opportunities with you.
            </p>
            <a className={styles.btn} href="#contact">
              Contact me
              <KeyboardArrowRightIcon size={25}></KeyboardArrowRightIcon>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img
                srcSet="./img/home/header-100x100.jpeg 100w, ./img/home/header-200x200.jpeg 200w, ./img/home/header-400x400.jpeg 400w"
                sizes="(max-width: 575px) 100px, (max-width: 991px) 200px, 400px"
                src={"./img/home/header-400x400.jpeg"}
                alt="home-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
