import React from "react";
import { connect } from "react-redux";
import { Table, Button, Divider } from "antd";
import {
  fetchAttributes,
  fetchEntityData,
  deleteEntityData
} from "../../actions";

const ButtonGroup = Button.Group;

class EntityData extends React.Component {
  state = { selectedEntities: [] };

  componentDidMount() {
    this.props.fetchAttributes(this.props.entityKey);
    this.props.fetchEntityData(this.props.entityKey);
  }

  deleteSelectedEntities = () => {
    this.deleteEntityData(this.state.selectedEntities);
  };

  deleteEntityData = dataIds => {
    this.props.deleteEntityData(
      dataIds,
      this.props.entityKey
    );
  };

  tableColumns = () => {
    return [...this.props.entity.attributes
      .filter(attribute => !attribute.identifier)
      .map(attribute => {
        return { dataIndex: attribute.field, title: attribute.name };
      }), {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (text, record) => (
        <span>
          <Button size="small" icon="form" />
          <Divider type="vertical" />
          <Button onClick={() => {
            this.deleteEntityData(record.id);
          }} size="small" icon="delete" />
        </span>
      ),
    }];
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
        <div className="table-operations">
          <Table
            bordered
            title={() => {
              return (
                <div>
                  <ButtonGroup>
                    <Button type="primary">
                      New
                  </Button>
                    <Button
                      type="danger"
                      onClick={this.deleteSelectedEntities}
                      disabled={this.state.selectedEntities.length === 0}
                    >
                      Delete
                  </Button>
                  </ButtonGroup>
                </div>
              );
            }}
            rowSelection={rowSelection}
            columns={this.tableColumns()}
            dataSource={this.tableData()}
          />
        </div>
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
)(EntityData);
