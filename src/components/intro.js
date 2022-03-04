import auxiliumWindow from "./../assets/images/auxiliumWindow.png";
import oceaneyesWindow from "./../assets/images/oceaneyesWindow.png";
import JazzClubWindow from "./../assets/images/jazzClubWindow.png";
import HabidaptWindow from "./../assets/images/habidaptWindow.png";
import DiscoverWindow from "./../assets/images/discoverWindow.png";
import ProcastWindow from "./../assets/images/procastWindow.png";
import linkedin from "./../assets/images/linkedin.png";
import email from "./../assets/images/email.png";
import { Grid, Row, Col } from "antd";

function Intro() {
  return (
    <div className="content intro">
      <Row>
        <Col span={24}>
            <div className="">
                <h1>Hey, I'm Lucy Zhu.</h1>
          <h2>
            I'm an aspiring developer with experience in primarily web
            development, but also game and mobile development. I also dabble in
            the business side of things as I love seeing the bigger picture of
            how everything works (or why it doesn't work!). In short, I just
            like to code and create cool things.
          </h2>

          <h2>
            I'm currently a 2nd year Software Engineering / Commerce
            (accounting/finance major) student at the University of Auckland.
          </h2>
            </div>
          
        </Col>
      </Row>
    </div>
  );
}

export default Intro;
