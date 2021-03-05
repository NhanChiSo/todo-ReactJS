import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import TableData from "./Components/TableData";
import Add from "./Components/Add";
import Data from "./Components/Data.json";
import { v1 as uuidv1 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
    };
  }

  componentWillMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(Data));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({ data: temp });
    }
  }

  changeEditStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };
  change = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  search = (text) => {
    this.setState({
      searchText: text,
    });
  };
  addUser = (name, tel, permission) => {
    var newUser = {};
    newUser.id = uuidv1();
    newUser.name = name;
    newUser.tel = tel;
    newUser.permission = permission;
    // đẩy dữ liệu mới vào data
    var dataNew = this.state.data;
    dataNew.push(newUser);
    // set lại data
    this.setState({
      data: dataNew,
    });
    localStorage.setItem("userData", JSON.stringify(dataNew));
  };

  editUser = (user) => {
    console.log("connected");
    console.log(user);
    this.setState({
      userEditObject: user,
    });
  };
  getUserEditApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.data));
  };
  deleteUserApp = (idUser) => {
    var temp = this.state.data;
    temp = temp.filter((item) => item.id !== idUser);
    this.setState({
      data: temp,
    });

    localStorage.setItem("userData", JSON.stringify(temp));
  };

  render() {
    var results = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        results.push(item);
      }
    });
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditApp={(info) => {
                  this.getUserEditApp(info);
                }}
                userEditObject={this.state.userEditObject}
                editUserStatus={this.state.editUserStatus}
                changeEditStatus={() => this.changeEditStatus()}
                search={(text) => this.search(text)}
                connect={() => this.change()}
                displayButton={this.state.display}
              />
              <TableData
                changeEditStatus={() => this.changeEditStatus()}
                edit={(user) => this.editUser(user)}
                dataUser={results}
                deleteUserSend={(idUser) => this.deleteUserApp(idUser)}
              />
              <Add
                add={(name, tel, permission) =>
                  this.addUser(name, tel, permission)
                }
                displayForm={this.state.display}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
