import React, { Component } from "react";
import RowTable from "./RowTable.js";

class TableData extends Component {
  mapData = () =>
    this.props.dataUser.map((value, key) => (
      <RowTable
        changeEditStatus={() => this.props.changeEditStatus()}
        editUser2={(user) => this.props.edit(value)}
        name={value.name}
        stt={key + 1}
        tel={value.tel}
        permission={value.permission}
        id={value.id}
        delete={(idUser) => this.deleteUser(idUser)}
      />
    ));
  deleteUser = (idUser) => {
    this.props.deleteUserSend(idUser);
  };
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Số điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mapData()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
