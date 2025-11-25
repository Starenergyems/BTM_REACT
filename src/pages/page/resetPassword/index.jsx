import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Flex, Form, Typography } from "antd";
import { clearToken, postToken } from "@/slices/api/main/token/index";
import { getAccountsInfo } from "@/slices/api/main/accounts/indexHelper";
import { pagesPathName } from "@/router";
import logoEng from "@/assets/img/logo-with-eng-word.png";
import Input from "@/components/units/input";
import ScopeStyle from "./indexStyle";

function ResetPassword() {
  const dispatch = useDispatch();
  const apiDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  //表單送出
  async function handleOnSubmit(values) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // 獲取第 i 個鍵
      if (key.includes("msal")) {
        localStorage.removeItem(key);
      }
    }
    dispatch(clearToken());
    const postTokenRes = await apiDispatch(
      postToken({
        data: {
          username: values.username,
          password: values.password,
        },
      })
    ).unwrap();
    if (postTokenRes?.access) {
      await apiDispatch(getAccountsInfo()).unwrap();
      if (
        location.pathname === pagesPathName.login.path ||
        location.pathname === `${pagesPathName.login.path}/`
      ) {
        navigate(pagesPathName.home.path);
      }
    }
  }
  //處理忘記密碼
  function backToLogin() {
    navigate(pagesPathName.login.path);
  }

  return (
    <ScopeStyle justify="center" align="center">
      <Flex className="login-box" vertical align="center">
        <Typography.Text style={{ textAlign: "center" }}>
          <img src={logoEng} alt="logo" className="logo" />
        </Typography.Text>
        <h2 className="subtitle">新密碼設定</h2>
        <Form
          className="w-80 mg-t-15"
          form={formData}
          layout="vertical"
          onFinish={handleOnSubmit}
          requiredMark={false}
          validateTrigger={isSubmitted ? "onChange" : "onSubmit"}
        >
          <Form.Item
            label="新密碼"
            name="username"
            rules={[{ required: true, message: "請輸入您的註冊信箱" }]}
          >
            <Input
              inputAttr={{
                placeholder: "請輸入您的註冊信箱",
              }}
              styles={{
                input: { width: "100%" },
              }}
            />
          </Form.Item>
          <Form.Item
            label="確認新密碼"
            name="password"
            rules={[{ required: true, message: "請輸入您的密碼" }]}
          >
            <Input
              inputAttr={{
                placeholder: "請輸入您的密碼",
              }}
              styles={{
                input: { width: "100%" },
              }}
              type="password"
            />
          </Form.Item>
          <Form.Item className="mg-t-20">
            <Flex align="center" justify="center" gap={32}>
              <Button
                htmlType="submit"
                className="btn-login"
                onClick={() => setIsSubmitted(true)}
              >
                送出
              </Button>
              <span className="forgot-password" onClick={backToLogin}>
                返回
              </span>
            </Flex>
          </Form.Item>
        </Form>
      </Flex>
    </ScopeStyle>
  );
}

export default ResetPassword;
