import { Grid, Row, Col, Timeline } from "antd";

function Experience() {
  return (
    <div className="content">
      <h2>Experience</h2>
      <Row>
        <Col span={24}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
}

export default Experience;
