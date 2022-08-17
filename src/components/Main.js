import React from "react";
import HornedBeast from "./HornedBeast";
import hornedBeastArr from "../hornedBeastArr";

// let curHornedBeastArr = [];
// for (let i = 0; i <= hornedBeastArr.length; i++) {
//   console.log(hornedBeastArr[i].title);
//   curHornedBeastArr.push(
//     <>
//     <h2>{hornedBeastArr[i].title}</h2>
//     <HornedBeast src={hornedBeastArr[i].image_url} alt={hornedBeastArr[i].keyword}/>
//     <p>{hornedBeastArr[i].description}</p>
//   </>)
// }
// console.log(curHornedBeastArr);

class Main extends React.Component {
  render() {
    let hornedBeasts = hornedBeastArr.map((beast, idx) => {
      // console.log(beast._id);
      return (
        <HornedBeast
          key={idx}
          imgUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
        />
      );
    });

    // console.log(hornedBeasts);

    return (
      <main>
        <div id="beast-container">{hornedBeasts}</div>
      </main>
    );
  }
}

export default Main;
