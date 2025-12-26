// import { pagesPathName } from "@/router";
// import { Navigate } from "react-router-dom";
import Flow from "../../../../public/flow.png";
import ScopeStyle from "./indexStyle";
import HomeBox from "@/components/units/homeBox";

import { Col, Row } from "antd";

function Home() {
  // return <Navigate to={pagesPathName.realTimeSpinningReserve.path} />;
  return (
    <ScopeStyle>
      <Row>
        <Col xs={24} lg={12}>
          <div className="block block1">
            <img className="" src={Flow} alt="flow" style={{ width: "100%" }} />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="block block1">
            <HomeBox title="Welcome to BTM Power Management System">aa</HomeBox>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="block block1"></div>
        </Col>
        <Col span={12}>
          {" "}
          <div className="block block1"></div>
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default Home;
