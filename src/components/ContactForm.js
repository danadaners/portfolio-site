import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      response: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f4mdf28",
        "template_4855tyr",
        e.target,
        "user_ittlxW8ZKa507oecTT5yv"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    this.setState({
      name: "",
      email: "",
      message: "",
      response:
        "Thank you! If your message was received, you will receive an auto reply email shortly.",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contactform">
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={this.state.name}
          className="text-primary"
          onChange={this.handleChange.bind(this, "name")}
          placeholder="Your name"
          required="required"
        />
        <label>Email address</label>
        <input
          type="email"
          name="user_email"
          value={this.state.email}
          className="text-primary"
          onChange={this.handleChange.bind(this, "email")}
          placeholder="Your email"
          required="required"
        />
        <label className="text-muted">Message</label>
        <textarea
          type="text"
          rows={10}
          name="message"
          required="required"
          className="form email"
          placeholder="Write a message.."
          value={this.state.message}
          onChange={this.handleChange.bind(this, "message")}
        />
        <button type="submit">Submit</button>
        <h4>{this.state.response}</h4>
      </form>
    );
  }
}

export default ContactForm;
