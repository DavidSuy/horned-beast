import React from "react";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Image src={this.props.beast.imgUrl} />
        <p>{this.props.beast.description}</p>
      </Modal>
    );
  }
}

export default SelectedBeast;
