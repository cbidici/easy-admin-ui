import React from "react";
import { Layout, Menu } from "antd";
import history from "../history";

const { Header } = Layout;
const keyPath = { "/": "main", "/entities": "entities", "/help": "help" };

class TopNavigation extends React.Component {
  getCurrentKey() {
    return keyPath[history.location.pathname];
  }

  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.getCurrentKey()]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item onClick={() => history.push("/")} key="main">
            Main
          </Menu.Item>
          <Menu.Item onClick={() => history.push("/entities")} key="entities">
            Entities
          </Menu.Item>
          <Menu.Item onClick={() => history.push("/help")} key="help">
            Help
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default TopNavigation;
