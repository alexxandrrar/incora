import React, { useEffect, useState } from "react";
import { Menu, Divider, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
  SmileOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  AlignLeftOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

export const SideBar: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [isToggleCollapse, setIsToggleCollapse] = useState<boolean>(true);
  const onCollapseHandler = () =>
    setIsToggleCollapse((prevState: boolean) => !prevState);
  const onBackHandler = () => window.history.back();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <Menu
      style={{ height: "100%" }}
      defaultSelectedKeys={["1"]}
      mode={"inline"}
      inlineCollapsed={isToggleCollapse}
    >
      <Row>
        <Col>
          <Divider key={"7"} orientation={"left"}>
            {!isToggleCollapse && (
              <Button key={"collapsed-Button"} onClick={onBackHandler}>
                <ArrowLeftOutlined />
              </Button>
            )}
          </Divider>
        </Col>
        <Col>
          <Divider key="5" orientation={"right"}>
            <Button key={"icon-button"} onClick={onCollapseHandler}>
              {isToggleCollapse ? (
                <MenuUnfoldOutlined />
              ) : (
                <AlignLeftOutlined />
              )}
            </Button>
          </Divider>
        </Col>
      </Row>
      <Menu.Item key="1" icon={<SmileOutlined />}>
        <Link to={"/script"}>Task 1</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<SmileOutlined />}>
        <Link to={"/pagination"}>Task 2</Link>
      </Menu.Item>
      {token !== null && (
        <Menu.Item key="3" icon={<SettingOutlined />}>
          <Link to={"/settings"}>Settings</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};
