import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App2 extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Start editing to see some magic happen :)</p>
        <a
          href="https://uigradients.com/#MegaTron"
          target="_blank">
          Enlace funcional
        </a>
        <a
        //enlace al pinchar la imagen
          href="https://onlyfullstack.blogspot.com/2019/11/react-tutorial.html"
          target="_blank">
          <img
            src="https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg" height="30%" width="90%"/>
        </a>
      </div>
    );
  }
}
export default App2;
