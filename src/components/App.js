import React from "react";
import "../css/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import data from "../data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      option: "",
      filteredBeast: data,
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

  handleSubmit = (option) => {
    // console.log(data);
    if (option === "1") {
      let newArr = data.filter((beast) => beast.horns === 1);
      this.setState({
        filteredBeast: newArr,
      });
    } else if (option === "2") {
      let newArr = data.filter((beast) => beast.horns === 2);
      this.setState({
        filteredBeast: newArr,
      });
    } else if (option === "3") {
      let newArr = data.filter((beast) => beast.horns === 3);
      this.setState({
        filteredBeast: newArr,
      });
    } else if (option === "4") {
      let newArr = data.filter((beast) => beast.horns >= 4);
      this.setState({
        filteredBeast: newArr,
      });
    } else {
      this.setState({
        filteredBeast: data,
      });
    }

    this.setState({
      option,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          handleImgClick={this.handleImgClick}
          handleSubmit={this.handleSubmit}
          filteredBeast={this.state.filteredBeast}
          option={this.state.option}
        />
        <Footer />
        <SelectedBeast
          beast={this.state.selectedBeast}
          showModal={this.state.showModal}
          handleHideModal={this.handleHideModal}
        />
      </>
    );
  }
}

export default App;
