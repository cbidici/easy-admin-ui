import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const LayoutContent = props => {
  return (
    <Layout style={{ padding: "24px 24px 24px 24px" }}>
      <Content
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        {props.children}
      </Content>
    </Layout>
  );
};

export default LayoutContent;
