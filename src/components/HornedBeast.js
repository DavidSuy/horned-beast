import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
    console.log(this.state);
  };

  handleImgClick = () => {
    this.props.handleImgClick(this.props);
  };

  render() {
    return (
      <Card
        style={{
          width: "18rem",
        }}
      >
        <Card.Img
          onClick={this.handleImgClick}
          variant="top"
          src={this.props.imgUrl}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle>
            {this.state.likes ? `❤️ ${this.state.likes}` : ""}
          </Card.Subtitle>
          <Card.Text>{this.props.description}</Card.Text>
          <Button onClick={this.handleLikes}>Vote</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
//
