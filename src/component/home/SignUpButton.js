import React, { Component } from 'react';
import SignUp from './SignUp.js';

let backgroundColor = 'none';
let cursur = 'pointer';

class SingUp_button extends Component {
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
          Sign Up
        </button>
        <SignUp isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default SingUp_button;
