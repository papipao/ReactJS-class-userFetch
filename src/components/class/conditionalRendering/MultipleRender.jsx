import React, { Component } from "react";
const url = "https://api.github.com/users/QuincyLarson";

class MultipleRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      user: "default user",
    };
  }

  componentDidMount() {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          this.setState({
            isLoading: false,
            isError: true,
          });
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        this.setState({
          user: login,
          isLoading: false,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="container">
          <h2>Loading</h2>
        </div>
      );
    }

    if (this.state.isError) {
      return (
        <div className="container">
          <h2>Error</h2>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>{this.state.user}</h1>
      </div>
    );
  }
}

export default MultipleRender;
