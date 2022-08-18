import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../data";

class Main extends React.Component {
  render() {
    let hornedBeasts = data.map((beast, idx) => {
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
        <div id="beast-container">{hornedBeasts}</div>
      </main>
    );
  }
}

export default Main;
