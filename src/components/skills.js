import { Grid, Row, Col } from "antd";

function Skills() {
  return (
    <div className="content">
      <h3>Skills that I am most confident in:</h3>
      <Row>
        <Col span={12}>
          <div>
            <ul>
              <li>React.js | Next.js</li>
              <li>HTML | CSS | Javascript</li>
              <li>Various CSS Frameworks</li>
              <li>Dart | Flutter</li>
              <li>Python</li>
              <li>Git | Version Control</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <ul>
              <li>UX/UI Design</li>
              <li>Sketching / Prototyping</li>
              <li>Graphic Design</li>
              <li>
                Accounting | Preparing Statements | Financial Analysis
              </li>
              <li>Marketing | Social Media Management</li>
            </ul>
          </div>
        </Col>
      </Row>
      <h3>
        Other skills I have used, but don't use them as often / are less
        confident in:
      </h3>
      <Row>
        <Col span={12}>
          <div>
            <ul>
        <li>Firebase</li>
              <li>MongoDB</li>
              <li>MATLAB</li>
              <li>C</li>
              <li>C#</li>
              <li>Java</li>
            </ul>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <ul>
              <li>Flask</li>
              <li>MySQL</li>
              <li>Photoshop</li>
              <li>Digital Art</li>
              <li>3D Modelling</li>
            </ul>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col span={24}>
          <div>
            <h2>Some of my favourite software that I find useful:</h2>
            <ul>
              <li>Figma</li>
              <li>Miro</li>
              <li>Trello</li>
              <li>Asana</li>
              <li>Slack</li>
              <li>Jira</li>
            </ul>
          </div>
        </Col>
      </Row> */}
    </div>
  );
}

export default Skills;
