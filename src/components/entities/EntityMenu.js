import React from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import { fetchEntities } from "../../actions";
const { SubMenu } = Menu;
const { Sider } = Layout;

class EntityMenu extends React.Component {
  componentDidMount() {
    this.props.fetchEntities();
  }

  renderEntites = category => {
    return category.entities.map((entity, index) => {
      return <Menu.Item key={`${index}`}>{entity.name}</Menu.Item>;
    });
  };

  renderCategories = () => {
    return this.props.entityTree.map((category, index) => {
      return (
        <SubMenu key={`${index}`} title={category.name}>
          {this.renderEntites(category)}
        </SubMenu>
      );
    });
  };

  render() {
    if (this.props.entityTree.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[]}
            defaultOpenKeys={this.props.entityTree.reduce(
              (openedKeys, category, index) => [...openedKeys, `${index}`],
              []
            )}
            style={{ height: "100%", borderRight: 0 }}
          >
            {this.renderCategories()}
          </Menu>
        </Sider>
      );
    }
  }
}

const mapStateToProps = state => {
  let entityTree = state.entities.reduce((entityTree, entity) => {
    let existingCategory = entityTree.filter(
      category => category.name === entity.name
    );

    if (existingCategory.length === 0) {
      return [...entityTree, { name: entity.category, entities: [entity] }];
    } else {
      existingCategory.entities.push(entity);
      return existingCategory;
    }
  }, []);

  return { entityTree: entityTree };
};

export default connect(
  mapStateToProps,
  { fetchEntities }
)(EntityMenu);
