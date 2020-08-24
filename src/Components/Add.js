import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: "",
    };
  }
  isAdd = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  hienthi = () => {
    if (this.props.displayForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card text-black bg-light mt-2">
              <img className="card-img-top" src="holder.js/100px180/" alt="" />
              <div className="card-body">
                <h4 className="card-title">Thêm mới</h4>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      onChange={(event) => this.isAdd(event)}
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
                      onChange={(event) => this.isAdd(event)}
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
                      className="custom-select"
                      onChange={(event) => this.isAdd(event)}
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
                      type="reset"
                      onClick={(name, tel, permission) =>
                        this.props.add(
                          this.state.name,
                          this.state.tel,
                          this.state.permission
                        )
                      }
                      className="btn btn-success"
                      value="Thêm mới"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  render() {
    return <div>{this.hienthi()}</div>;
  }
}

export default Add;
