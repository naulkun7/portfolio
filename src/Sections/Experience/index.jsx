import { useState } from "react"
import constant from "../../constant.json"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import styles from "./styles.module.css"

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>EXPERIENCE</h2>
        <div className={styles.outer}>
          <div className={styles.left}>
            {constant.experiences.map((experience, index) => (
              <div
                key={index}
                className={
                  index === currentIndex
                    ? `${styles.tab} ${styles.active_tab}`
                    : `${styles.tab}`
                }
                onClick={() => setCurrentIndex(index)}
              >
                {experience.company}
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>
              {constant.experiences[currentIndex].title}{" "}
              <a
                className={styles.link}
                href={constant.experiences[currentIndex].link}
                target="_blank"
                rel="noreferrer"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
