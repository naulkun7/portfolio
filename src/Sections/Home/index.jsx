import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import styles from "./styles.module.css"

function Home() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = [
    "Front End Developer",
    "Full Stack Developer",
    "Back End Developer",
  ]
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }
    if (!isDeleting && updatedText === fullText) {
      setDelta(period)
      setIsDeleting(true)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className={styles.home} id="home">
      <Container className={styles.container}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className={styles.home_content}>
            <span className={styles.tagline}>Welcome to my PORTFOLIO</span>
            <h1>
              {`I'm `}
              <span className={styles.wrap}>{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi
              enim molestiae labore iste exercitationem iusto impedit itaque?
              Expedita veniam, corporis sed aperiam perferendis repudiandae
              iusto voluptatem dignissimos voluptates cumque!
            </p>
            <button onClick={() => console.log("Connect")}>
              Let's Connect
              <KeyboardArrowRightIcon size={25}></KeyboardArrowRightIcon>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={"./img/home/header.jpeg"} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
