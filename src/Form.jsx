import React, { Component } from "react";

class Form extends Component {
  clickhere() {
    document.querySelector(".div").textContent = alert(
      "Tesekkurler,formunuz qebul olundu"
    );
  }
  render() {
    return (
      <div>
        <form>
          <div className="div"></div>
          name: <hr />
          <input type="text" /> <hr />
          surname:
          <hr />
          <input type="text" /> <hr />
          telephone number: <hr />
          <input type=" number" /> <hr />
          email: <hr />
          <input type="email" /> . <hr />
          your message: <hr />
          <textarea placeholder="your comment" /> <hr />
        </form>
        <button>Cancel</button>

        <button onClick={this.clickhere}>Submit</button>
      </div>
    );
  }
}

export default Form;
