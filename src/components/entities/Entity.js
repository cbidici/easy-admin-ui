import React from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import {
  fetchAttributes,
  fetchEntityData,
  deleteEntityData
} from "../../actions";

class Entity extends React.Component {
  state = { selectedEntities: [] };

  componentDidMount() {
    this.props.fetchAttributes(this.props.entityKey);
    this.props.fetchEntityData(this.props.entityKey);
  }

  deleteEntities = () => {
    this.props.deleteEntityData(
      this.state.selectedEntities,
      this.props.entityKey
    );
  };

  tableColumns = () => {
    return this.props.entity.attributes
      .filter(attribute => !attribute.identifier)
      .map(attribute => {
        return { dataIndex: attribute.field, title: attribute.name };
      });
  };

  tableData = () => {
    let identifier = this.props.entity.attributes.filter(
      attribute => attribute.identifier
    )[0];

    return this.props.entity.data.map((data, index) => {
      return {
        ...data,
        key: data[identifier.field]
      };
    });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedEntities: selectedRowKeys });
  };

  renderTable = () => {
    if (this.props.entity.attributes && this.props.entity.data) {
      const rowSelection = {
        selectedRowKeys: this.state.selectedEntities,
        onChange: this.onSelectChange
      };

      return (
        <Table
          bordered
          title={() => {
            return (
              <div>
                <Button
                  type="primary"
                  onClick={this.deleteEntities}
                  disabled={this.state.selectedEntities.length === 0}
                >
                  Delete
                </Button>
              </div>
            );
          }}
          rowSelection={rowSelection}
          columns={this.tableColumns()}
          dataSource={this.tableData()}
        />
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    if (this.props.entity) {
      const { entity } = this.props;
      return (
        <div>
          <h3>{entity.name}</h3>
          <div>{this.renderTable()}</div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entity: state.entities[ownProps.entityKey]
  };
};

export default connect(
  mapStateToProps,
  { fetchAttributes, fetchEntityData, deleteEntityData }
)(Entity);
