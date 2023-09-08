import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import styles from "./styles.module.css"

function ContactBar() {
  return (
    <div id="contactBar" className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/luannguyen-2k2/"
          target="_blank"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/naulkun7"
          target="_blank"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.facebook.com/luan.nguyen.007/"
          target="_blank"
          className={styles.icon}
        >
          <FacebookIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:luannguyenn.2k2@gmail.com" className={styles.email}>
          luannguyenn.2k2@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default ContactBar
