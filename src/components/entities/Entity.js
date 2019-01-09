import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { fetchAttributes, fetchEntityData } from "../../actions";

class Entity extends React.Component {
  componentDidMount() {
    this.props.fetchAttributes(this.props.entityKey);
    this.props.fetchEntityData(this.props.entityKey);
  }

  tableColumns = () => {
    return this.props.entity.attributes.map(attribute => {
      return { dataIndex: attribute.identifier, title: attribute.name };
    });
  };

  tableData = () => {
    return this.props.entity.data.map((data, index) => {
      return {
        ...data,
        key: index
      };
    });
  };

  renderAttributes = () => {
    if (this.props.entity.attributes && this.props.entity.data) {
      console.log(this.tableColumns());
      console.log(this.tableData());

      return (
        <Table columns={this.tableColumns()} dataSource={this.tableData()} />
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  renderEntity = () => {
    if (this.props.entity) {
      const { entity } = this.props;
      return (
        <div>
          <h3>{entity.name}</h3>
          <div>{this.renderAttributes()}</div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    return this.renderEntity();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entity: state.entities[ownProps.entityKey]
  };
};

export default connect(
  mapStateToProps,
  { fetchAttributes, fetchEntityData }
)(Entity);
