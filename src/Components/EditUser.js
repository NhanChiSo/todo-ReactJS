import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission,
    };
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  saveEdit = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    this.props.getUserEdit(info);

    this.props.changeEditStatus();
  };
  render() {
    return (
      <div className="col-12">
        <form>
          <div className="card text-white bg-danger mt-2">
            <img className="card-img-top" src="holder.js/100px180/" alt="" />
            <div className="card-body">
              <h4 className="card-title text-center">Sửa thông tin User</h4>
              <div className="form-group">
                <div className="form-group">
                  <input
                    defaultValue={this.props.userEditObject.name}
                    onChange={(event) => this.isChange(event)}
                    name="name"
                    type="text"
                    className="form-control"
                    id
                    aria-describedby="helpId"
                    placeholder="Tên User mới"
                  />
                </div>
                <div className="form-group">
                  <input
                    defaultValue={this.props.userEditObject.tel}
                    onChange={(event) => this.isChange(event)}
                    name="tel"
                    type="text"
                    className="form-control"
                    id
                    aria-describedby="helpId"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="form-group">
                  <select
                    defaultValue={this.props.userEditObject.permission}
                    className="custom-select"
                    onChange={(event) => this.isChange(event)}
                    name="permission"
                    id
                    required
                  >
                    <option value>Mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Morderator</option>
                    <option value={3}>User</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="button"
                    onClick={() => this.saveEdit()}
                    className="btn btn-block btn-success"
                    value="Sửa"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
