import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: "",
      userObj: {},
    };
  }
  getUserEdit = (info) => {
    this.setState({
      userObj: info,
    });
    this.props.getUserEditApp(info);
  };
  isShowEdit = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getUserEdit={(info) => this.getUserEdit(info)}
          userEditObject={this.props.userEditObject}
          changeEditStatus={() => this.props.changeEditStatus()}
        />
      );
    }
  };
  isSearch = (event) => {
    this.setState({
      textSearch: event.target.value,
    });
    this.props.search(this.state.textSearch);
  };
  btnDisplay = () => {
    if (this.props.displayButton === true) {
      return (
        <div className="btn btn-success" onClick={() => this.props.connect()}>
          Đóng lại
        </div>
      );
    } else {
      return (
        <div className="btn btn-warning" onClick={() => this.props.connect()}>
          Thêm mới
        </div>
      );
    }
  };

  render() {
    return (
      <div className="col-12">
        <div className="form-group">
          <div className="btn-group">
            <input
              onChange={(event) => this.isSearch(event)}
              type="text"
              className="form-control"
              name
              id
              aria-describedby="helpId"
              placeholder="Nhập từ khóa"
            />
            <div
              className="btn btn-info"
              onClick={(text) => this.props.search(this.state.textSearch)}
            >
              Tìm
            </div>
          </div>
          {this.btnDisplay()}
        </div>
        <hr />
        <div className="row">{this.isShowEdit()}</div>
      </div>
    );
  }
}

export default Search;
