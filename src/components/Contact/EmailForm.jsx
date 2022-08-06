import React from "react";
import "./EmailForm.css";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <form className="d-flex flex-column">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">
              Name:
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
                id="name"
                required
              />
            </label>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">
              Email:
              <input
                type="email"
                placeholder="name@example.com"
                className="form-control"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
                id="email"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Message"
              className="form-control"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            {" "}
            Send
          </button>
        </form>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }
}

export default EmailForm;
