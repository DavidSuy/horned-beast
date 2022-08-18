import React from "react";
import "../css/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
    };
  }

  handleImgClick = (beast) => {
    this.setState({
      selectedBeast: beast,
      showModal: true,
    });
  };

  handleHideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main handleImgClick={this.handleImgClick} />
        <Footer />
        <SelectedBeast
          beast={this.state.selectedBeast}
          showModal={this.state.showModal}
          handleHideModal={this.handleHideModal}
          // handleShowModal={this.handleShowModal}
        />
      </>
    );
  }
}

export default App;
