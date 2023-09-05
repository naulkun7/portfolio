import styles from "./styles.module.css"

function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">
          <span>Nguyễn Hoàng Luân ❤</span>
        </a>
      </div>
      <div className={styles.nav_right}>
        <a href="#about" className={styles.nav_link}>
          About
        </a>
        <a href="#skills" className={styles.nav_link}>
          Skills
        </a>
        <a href="#experience" className={styles.nav_link}>
          Experience
        </a>
        <a href="#project" className={styles.nav_link}>
          Projects
        </a>
        <a href="#contact" className={styles.nav_link}>
          Contact
        </a>
        <a
          href="./other/resume.pdf"
          className={styles.nav_resume_btn}
          download="Resume_NguyenHoangLuan"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
