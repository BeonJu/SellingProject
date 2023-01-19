import React, { Component } from 'react';
import Login from './Login.js';

let backgroundColor = 'none';
let cursur = 'pointer';

class Login_button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <button
          style={{
            border: 'none',
            background: backgroundColor,
            cursor: cursur,
          }}
          onClick={this.openModal}
        >
          Login
        </button>
        <Login isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default Login_button;
