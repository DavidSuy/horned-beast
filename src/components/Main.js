import React from "react";
import HornedBeast from "./HornedBeast";
// import data from "../data";
import AppForm from "./AppForm";

class Main extends React.Component {
  render() {
    let hornedBeasts = this.props.filteredBeast.map((beast, idx) => {
      return (
        <HornedBeast
          key={idx}
          imgUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          handleImgClick={this.props.handleImgClick}
        />
      );
    });

    return (
      <main>
        <AppForm handleSubmit={this.props.handleSubmit} />
        <div id="beast-container">{hornedBeasts}</div>
      </main>
    );
  }
}

export default Main;
