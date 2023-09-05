import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.css"

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <Container className={styles.container}>
        <h2 className={styles.contact_title}>Contact</h2>
        <Row className={styles.row}>
          <Col xs={12} xl={6}>
            <Form>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
                <Form.Text className={styles.span}>
                  I'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Message" rows={3} />
              </Form.Group>
              <Button
                className={styles.submit_form_btn}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} xl={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1317197881317!2d106.79904467585757!3d10.87758478927738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a415a9d221%3A0x550c2b41569376f9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBRdeG7kWMgVOG6vyAtIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1693893289145!5m2!1svi!2s"
              width="100%"
              height="100%"
              className={styles.map}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
