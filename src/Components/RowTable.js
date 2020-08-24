import React, { Component } from "react";

class RowTable extends Component {
  permiss() {
    switch (this.props.permission) {
      case "1":
        return "Admin";
      case "2":
        return "Morderator";
      case "3":
        return "User";
      case 1:
        return "Admin";
      case 2:
        return "Morderator";
      case 3:
        return "User";
      default:
        return "User";
    }
  }
  editUser3 = () => {
    this.props.editUser2();
    this.props.changeEditStatus();
  };
  delete = (idUser) => {
    this.props.delete(idUser);
  };
  render() {
    return (
      <tr>
        <td>{this.props.stt}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.permiss()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning" onClick={() => this.editUser3()}>
              <i className="fa fa-edit" />
              Sửa
            </div>
            <div
              className="btn btn-danger"
              onClick={(idUser) => this.delete(this.props.id)}
            >
              Xóa
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default RowTable;
