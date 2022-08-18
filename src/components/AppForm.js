import React from "react";
import Form from "react-bootstrap/Form";
import "../css/AppForm.css";

class AppForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(e.target.value);
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>How Many Horns Do you want to see?</Form.Label>
          <Form.Select name="hornsForm" onChange={this.handleSubmit}>
            <option value="0">Any</option>
            <option value="1">Uni-Horns</option>
            <option value="2">Tandem-Horns</option>
            <option value="3">Tri-Horns</option>
            <option value="4">Freaks</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default AppForm;
