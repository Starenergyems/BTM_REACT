import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { pagesPathName } from "@/router";
import logoEng from "@/assets/img/logo-with-eng-word.png";
import check from "@/assets/img/check.png";
import ScopeStyle from "./indexStyle";

function ResetSuccess() {
  const navigate = useNavigate();

  function backToLogin() {
    navigate(pagesPathName.login.path);
  }

  return (
    <ScopeStyle justify="center" align="center">
      <Flex className="login-box" vertical align="center">
        <Typography.Text style={{ textAlign: "center" }}>
          <img src={logoEng} alt="logo" className="logo" />
        </Typography.Text>
        <h2 className="subtitle">變更成功</h2>
        <img src={check} alt="logo" className="check" />
        <Button htmlType="submit" className="btn-login" onClick={backToLogin}>
          返回
        </Button>
      </Flex>
    </ScopeStyle>
  );
}

export default ResetSuccess;
