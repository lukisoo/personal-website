import auxiliumWindow from "./../assets/images/auxiliumWindow.png";
import oceaneyesWindow from "./../assets/images/oceaneyesWindow.png";
import JazzClubWindow from "./../assets/images/jazzClubWindow.png";
import HabidaptWindow from "./../assets/images/habidaptWindow.png";
import DiscoverWindow from "./../assets/images/discoverWindow.png";
import ProcastWindow from "./../assets/images/procastWindow.png";
import linkedin from "./../assets/images/linkedin.png";
import email from "./../assets/images/email.png";
import { Grid, Row, Col } from "antd";

import ProjectCard from "./projectCard";

function Projects() {
  return (
    <div className="content">
      <Row>
        <Col span={12}>
            <ProjectCard/>
        </Col>
        <Col span={12}>
            <ProjectCard/>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
            <ProjectCard/>
        </Col>
        <Col span={12}>
            <ProjectCard/>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
            <ProjectCard/>
        </Col>
        <Col span={12}>
            <ProjectCard/>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
            <ProjectCard/>
        </Col>
        <Col span={12}>
            <ProjectCard/>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
