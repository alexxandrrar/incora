import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import s from "./LoginationPage.module.css";

interface IValues {
  password: string;
  username: string;
}

interface IErrorInfo {
  errorFields: object[];
  outOfDate: boolean;
  values: IValues;
}

export const LoginationPage = () => {
  const navigate = useNavigate();
  const onFinish = (values: IValues) => {
    const token = values.username + values.password;
    localStorage.setItem("token", token);
    navigate("/script");
    window.location.reload();
  };

  const onFinishFailed = (errorInfo: IErrorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={s.form}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
