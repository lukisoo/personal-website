import { Grid, Row, Col } from "antd";
import linkedin from "./../assets/images/linkedin.png";
import email from "./../assets/images/email.png";

function Contact() {
  return (
    <div className="content">
      <Row>
        <Col span={24}>
          <div>
            <h1>Contact me!</h1>
            <h3>
              I would love to chat about any working opportunities, projects, or
              just anything in general!
            </h3>
            <h3>
              You can reach me through my email (lzlucyz@gmail.com) or my
              LinkedIn (Lucy Zhu) below:
            </h3>
            <br />

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
