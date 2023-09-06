import styles from "./styles.module.css"
import DehazeIcon from "@mui/icons-material/Dehaze"
import CloseIcon from "@mui/icons-material/Close"
import { useRef } from "react"

function Navbar() {
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle(styles.nav_show)
  }

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">
          <span>Nguyễn Hoàng Luân</span>
        </a>
      </div>
      <div className={styles.nav_right} ref={navRef}>
        <a href="#about" className={styles.nav_link} onClick={showNavBar}>
          About
        </a>
        <a href="#experience" className={styles.nav_link} onClick={showNavBar}>
          Experience
        </a>
        <a href="#skills" className={styles.nav_link} onClick={showNavBar}>
          Skills
        </a>
        <a href="#project" className={styles.nav_link} onClick={showNavBar}>
          Projects
        </a>
        <a href="#contact" className={styles.nav_link} onClick={showNavBar}>
          Contact
        </a>
        <a
          href="./other/resume.pdf"
          className={styles.nav_resume_btn}
          download="Resume_NguyenHoangLuan"
        >
          Resume
        </a>
        <button onClick={showNavBar} className={styles.nav_btn}>
          <CloseIcon />
        </button>
      </div>
      <button
        onClick={showNavBar}
        className={styles.nav_btn + " " + styles.nav_open_btn}
      >
        <DehazeIcon />
      </button>
    </nav>
  )
}

export default Navbar
